using HotelOS.Hubs;
using HotelOS.Modules.RoomService.Data;
using HotelOS.Modules.RoomService.Models;
using HotelOS.Modules.Reception.Data;
using HotelOS.Modules.Reception.Models;
using HotelOS.Modules.Reception.Services;
using HotelOS.Modules.Maintenance.Data;
using HotelOS.Modules.Maintenance.Models;
using HotelOS.Shared;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.Reception.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserPanelController : ControllerBase
{
    private readonly ReceptionDb            _db;
    private readonly RoomServiceDb          _rsDb;
    private readonly MaintenanceDb          _mainDb;
    private readonly RoomAssignmentService  _assign;
    private readonly IHubContext<HotelHub>  _hub;

    public UserPanelController(
        ReceptionDb db, RoomServiceDb rsDb, MaintenanceDb mainDb,
        RoomAssignmentService assign, IHubContext<HotelHub> hub)
    {
        _db     = db;
        _rsDb   = rsDb;
        _mainDb = mainDb;
        _assign = assign;
        _hub    = hub;
    }

    [HttpGet("rooms")]
    public async Task<IActionResult> GetRooms()
    {
        var rooms = await _db.Rooms
            .Where(r => r.Status == RoomStatus.Available)
            .ToListAsync();
        return Ok(rooms);
    }

    [HttpPost("book")]
    public async Task<IActionResult> BookRoom([FromBody] UserBookRequest req)
    {
        var guest = await _db.Guests.FindAsync(req.GuestId);
        if (guest == null) return Unauthorized(new { message = "Foydalanuvchi topilmadi" });

        var room = await _assign.AssignRoomAsync(RoomStyle.Standard, null, HotelOS.Shared.ProximityPreference.None, req.RoomNumber, requireClean: false);
        
        if (room == null)
            return BadRequest(new { message = "Ushbu xona hozirgina band qilingan yoki mavjud emas!" });

        room.Status = RoomStatus.Occupied;

        var booking = new RoomBooking
        {
            GuestId        = guest.Id,
            RoomId         = room.Id,
            StartDate      = DateTime.UtcNow,
            DurationInDays = req.DurationInDays,
            Status         = BookingStatus.Pending
        };
        
        _db.Bookings.Add(booking);
        await _db.SaveChangesAsync();

        await _hub.Clients.All.SendAsync("RoomStatusChanged", new {
            roomNumber = room.RoomNumber,
            status     = room.Status.ToString(),
            style      = room.Style.ToString(),
            cleaning   = room.CleaningStatus.ToString()
        });

        await _hub.Clients.All.SendAsync("NewEvent", new {
            type    = "Booking",
            message = $"Saytdan yangi bron: {guest.Name} — Xona {room.RoomNumber}",
            time    = DateTime.UtcNow
        });

        return Ok(new { message = "Muvaffaqiyatli band qilindi!", booking });
    }

    [HttpGet("my-bookings/{guestId}")]
    public async Task<IActionResult> GetMyBookings(int guestId)
    {
        var bookings = await _db.Bookings
            .Include(b => b.Room)
            .Where(b => b.GuestId == guestId)
            .OrderByDescending(b => b.StartDate)
            .Select(b => new {
                b.Id,
                b.ReservationNumber,
                RoomNumber = b.Room != null ? b.Room.RoomNumber : "Noma'lum",
                b.StartDate,
                b.DurationInDays,
                Status = b.Status.ToString(),
                Style = b.Room != null ? b.Room.Style.ToString() : ""
            })
            .ToListAsync();
        return Ok(bookings);
    }

    [HttpPost("report-issue")]
    public async Task<IActionResult> ReportIssue([FromBody] ReportIssueRequest req)
    {
        var guest = await _db.Guests.FindAsync(req.GuestId);
        if (guest == null) return Unauthorized(new { message = "Foydalanuvchi topilmadi" });

        string roomNum = req.RoomNumber ?? "Noma'lum";

        if (req.Target == "Maintenance")
        {
            var priorityEnum = req.Priority switch {
                "Oddiy" => TicketPriority.Low,
                "O'rta" => TicketPriority.Normal,
                "Shoshilinch" => TicketPriority.High,
                "Kritik" => TicketPriority.Critical,
                _ => TicketPriority.Normal
            };

            var ticket = new MaintenanceTicket
            {
                RoomNumber  = roomNum,
                Description = req.Issue,
                Category    = "Boshqa",
                Priority    = priorityEnum,
                Status      = TicketStatus.Pending,
                ReportedAt  = DateTime.UtcNow
            };
            _mainDb.Tickets.Add(ticket);
            await _mainDb.SaveChangesAsync();

            await _hub.Clients.All.SendAsync("NewEvent", new {
                type    = "TicketCreated",
                message = $"Yangi TICKET (Xona {roomNum}): {req.Issue}",
                time    = DateTime.UtcNow
            });
        }
        else
        {
            var order = new ServiceOrder
            {
                RoomNumber  = roomNum,
                GuestName   = guest.Name,
                Items       = req.Issue,
                Notes       = "User Panel orqali yuborildi",
                Priority    = req.Priority ?? "Oddiy",
                Status      = OrderStatus.Received,
                CreatedAt   = DateTime.UtcNow
            };
            _rsDb.Orders.Add(order);
            await _rsDb.SaveChangesAsync();

            await _hub.Clients.All.SendAsync("NewEvent", new {
                type    = "RoomService",
                message = $"Xona xizmatiga yangi buyurtma ({roomNum}): {req.Issue}",
                time    = DateTime.UtcNow
            });
        }

        return Ok(new { message = "Muammo haqida xabar berildi, tez orada hal qilamiz!" });
    }
}

public class UserBookRequest
{
    public int    GuestId        { get; set; }
    public string RoomNumber     { get; set; } = string.Empty;
    public int    DurationInDays { get; set; } = 1;
}

public class ReportIssueRequest
{
    public int    GuestId    { get; set; }
    public string? RoomNumber { get; set; }
    public string Issue      { get; set; } = string.Empty;
    public string? Priority   { get; set; }
    public string? Target     { get; set; }
}
