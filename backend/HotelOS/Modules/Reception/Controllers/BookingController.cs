using HotelOS.Hubs;
using HotelOS.Modules.Housekeeping.Data;
using HotelOS.Modules.Housekeeping.Models;
using HotelOS.Modules.Reception.Data;
using HotelOS.Modules.Reception.Models;
using HotelOS.Modules.Reception.Services;
using HotelOS.Shared;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.Reception.Controllers;

[ApiController]
public class BookingController : ControllerBase
{
    private readonly ReceptionDb            _db;
    private readonly HousekeepingDb         _hsDb;
    private readonly RoomAssignmentService  _assign;
    private readonly BillingService         _billing;
    private readonly IHubContext<HotelHub>  _hub;

    public BookingController(
        ReceptionDb db, HousekeepingDb hsDb,
        RoomAssignmentService assign, BillingService billing,
        IHubContext<HotelHub> hub)
    {
        _db      = db;
        _hsDb    = hsDb;
        _assign  = assign;
        _billing = billing;
        _hub     = hub;
    }

    // ── GET /api/bookings ─────────────────────────────
    [HttpGet("/api/bookings")]
    public async Task<IActionResult> GetBookings()
    {
        var list = await _db.Bookings
            .Include(b => b.Guest)
            .Include(b => b.Room)
            .OrderByDescending(b => b.Id)
            .Select(b => new {
                b.Id, b.ReservationNumber, b.Status,
                b.StartDate, b.DurationInDays,
                b.CheckIn, b.CheckOut, b.AdvancePayment,
                guestName  = b.Guest != null ? b.Guest.Name : "",
                roomNumber = b.Room  != null ? b.Room.RoomNumber : "",
                roomStyle  = b.Room  != null ? (object)b.Room.Style : "",
                floor      = b.Room  != null ? b.Room.Floor : 0
            })
            .ToListAsync();
        return Ok(list);
    }

    // ── GET /api/guests ───────────────────────────────
    [HttpGet("/api/guests")]
    public async Task<IActionResult> GetGuests()
    {
        var g = await _db.Guests
            .Select(x => new { x.Id, x.Name, x.Email, x.PhoneNumber })
            .ToListAsync();
        return Ok(g);
    }

    // ── POST /api/checkin — TS-01, TS-06 ─────────────
    [HttpPost("/api/checkin")]
    public async Task<IActionResult> CheckIn([FromBody] CheckInRequest req)
    {
        if (string.IsNullOrWhiteSpace(req.GuestName))
            return BadRequest(new { message = "Mehmon ismi majburiy" });

        // TS-06: SemaphoreSlim ichida xona tayinlanadi
        var room = await _assign.AssignRoomAsync(req.RoomStyle, req.FloorPreference, req.Proximity, req.SpecificRoomNumber);
        if (room == null)
        {
            var avail = await _db.Rooms.CountAsync(r => r.Status == RoomStatus.Available);
            return NotFound(new {
                message    = $"'{req.RoomStyle}' turida bo'sh xona topilmadi",
                available  = avail
            });
        }

        var guest = await _db.Guests.FirstOrDefaultAsync(g => g.Name == req.GuestName)
                    ?? new Guest { Name = req.GuestName, Email = req.Email ?? "" };
        if (guest.Id == 0) { _db.Guests.Add(guest); await _db.SaveChangesAsync(); }

        var booking = new RoomBooking
        {
            GuestId        = guest.Id,
            RoomId         = room.Id,
            StartDate      = DateTime.UtcNow,
            DurationInDays = req.DurationInDays,
            AdvancePayment = req.AdvancePayment,
            CheckIn        = DateTime.UtcNow,
            Status         = BookingStatus.CheckedIn
        };
        _db.Bookings.Add(booking);
        _db.RoomKeys.Add(new RoomKey { RoomId = room.Id, Active = true });
        await _db.SaveChangesAsync();

        // SignalR broadcast
        await BroadcastStatsAsync();
        await _hub.Clients.All.SendAsync("NewEvent", new {
            type    = "CheckIn",
            message = $"{guest.Name} — Xona {room.RoomNumber}",
            room    = room.RoomNumber,
            time    = DateTime.UtcNow
        });
        await _hub.Clients.All.SendAsync("RoomStatusChanged", new {
            roomNumber = room.RoomNumber,
            status     = room.Status.ToString(),
            style      = room.Style.ToString()
        });

        return Ok(new {
            message           = "Check-in muvaffaqiyatli!",
            reservationNumber = booking.ReservationNumber,
            roomNumber        = room.RoomNumber,
            floor             = room.Floor,
            bookingId         = booking.Id
        });
    }

    // ── POST /api/checkout — TS-02 ────────────────────
    [HttpPost("/api/checkout")]
    public async Task<IActionResult> CheckOut([FromBody] CheckOutRequest req)
    {
        if (string.IsNullOrWhiteSpace(req.RoomNumber) ||
            !System.Text.RegularExpressions.Regex.IsMatch(req.RoomNumber, @"^\d{3}$"))
            return BadRequest(new { message = "Noto'g'ri xona raqami (3 raqam)" });

        var booking = await _db.Bookings
            .Include(b => b.Guest)
            .Include(b => b.Room)
            .FirstOrDefaultAsync(b => b.Room!.RoomNumber == req.RoomNumber
                                   && b.Status == BookingStatus.CheckedIn);
        if (booking == null)
            return NotFound(new { message = $"{req.RoomNumber}-xonada faol check-in topilmadi" });

        var invoice = await _billing.CalculateInvoiceAsync(booking, DateTime.UtcNow, req.DiscountCode);
        booking.Room!.CheckOut();
        await _db.SaveChangesAsync();

        // TS-02: Xona bo'shasdi → Housekeeping moduli orqali tozalash vazifasi yaratiladi
        await CreateCleaningTaskAsync(booking.Room.RoomNumber);

        // SignalR broadcast
        await BroadcastStatsAsync();
        await _hub.Clients.All.SendAsync("NewEvent", new {
            type    = "CheckOut",
            message = $"{booking.Guest?.Name} chiqdi — Xona {booking.Room.RoomNumber}",
            room    = booking.Room.RoomNumber,
            time    = DateTime.UtcNow
        });
        await _hub.Clients.All.SendAsync("RoomStatusChanged", new {
            roomNumber = booking.Room.RoomNumber,
            status     = booking.Room.Status.ToString(),
            style      = booking.Room.Style.ToString()
        });

        return Ok(new {
            message      = "Checkout muvaffaqiyatli!",
            roomNumber   = booking.Room.RoomNumber,
            totalAmount  = invoice.TotalAmount,
            balanceDue   = invoice.BalanceDue,
            refundAmount = invoice.RefundAmount,
            invoiceId    = invoice.Id
        });
    }

    // ── POST /api/cancel/{id} — R5 ────────────────────
    [HttpPost("/api/cancel/{id}")]
    public async Task<IActionResult> Cancel(int id)
    {
        var booking = await _db.Bookings.Include(b => b.Room).FirstOrDefaultAsync(b => b.Id == id);
        if (booking == null) return NotFound(new { message = "Bron topilmadi" });

        var refund = _billing.CalculateCancellationRefund(booking);
        booking.Status = BookingStatus.Canceled;
        
        if (booking.Room != null) {
            booking.Room.Status = RoomStatus.Available;
        }
        await _db.SaveChangesAsync();
        
        await BroadcastStatsAsync();
        if (booking.Room != null) {
            await _hub.Clients.All.SendAsync("RoomStatusChanged", new {
                roomNumber = booking.Room.RoomNumber,
                status     = booking.Room.Status.ToString(),
                style      = booking.Room.Style.ToString()
            });
        }

        return Ok(new { message = "Bekor qilindi", refundAmount = refund });
    }

    // ── POST /api/confirm/{id} ────────────────────────
    [HttpPost("/api/confirm/{id}")]
    public async Task<IActionResult> Confirm(int id)
    {
        var booking = await _db.Bookings.Include(b => b.Room).Include(b => b.Guest).FirstOrDefaultAsync(b => b.Id == id);
        if (booking == null) return NotFound(new { message = "Bron topilmadi" });

        booking.Status = BookingStatus.CheckedIn;
        booking.CheckIn = DateTime.UtcNow;
        
        if (booking.Room != null) {
            booking.Room.Status = RoomStatus.Occupied;
        }
        
        _db.RoomKeys.Add(new RoomKey { RoomId = booking.RoomId ?? 0, Active = true });
        await _db.SaveChangesAsync();

        await BroadcastStatsAsync();
        if (booking.Room != null) {
            await _hub.Clients.All.SendAsync("RoomStatusChanged", new {
                roomNumber = booking.Room.RoomNumber,
                status     = booking.Room.Status.ToString(),
                style      = booking.Room.Style.ToString()
            });
            await _hub.Clients.All.SendAsync("NewEvent", new {
                type    = "CheckIn",
                message = $"Tasdiqlandi: {booking.Guest?.Name} — Xona {booking.Room.RoomNumber}",
                time    = DateTime.UtcNow
            });
        }

        return Ok(new { message = "Muvaffaqiyatli tasdiqlandi!" });
    }

    // ── Housekeeping moduili bilan integratsiya ────────
    // Checkout bo'lganda avtomatik tozalash vazifasi yaratiladi
    private async Task CreateCleaningTaskAsync(string roomNumber)
    {
        var task = new CleaningTask
        {
            RoomNumber  = roomNumber,
            Description = $"Xona {roomNumber} — mehmon chiqdi, tozalash kerak",
            Status      = CleaningTaskStatus.Pending,
            CreatedAt   = DateTime.UtcNow
        };
        _hsDb.Tasks.Add(task);
        await _hsDb.SaveChangesAsync();
    }

    // ── SignalR orqali statistika yuborish ────────────
    private async Task BroadcastStatsAsync()
    {
        var stats = new
        {
            totalRooms    = await _db.Rooms.CountAsync(),
            occupied      = await _db.Rooms.CountAsync(r => r.Status == RoomStatus.Occupied),
            available     = await _db.Rooms.CountAsync(r => r.Status == RoomStatus.Available),
            activeBookings= await _db.Bookings.CountAsync(b => b.Status == BookingStatus.CheckedIn)
        };
        await _hub.Clients.All.SendAsync("StatsUpdated", stats);
    }
}

// ── Request modellari ─────────────────────────────────
public class CheckInRequest
{
    public string              GuestName       { get; set; } = string.Empty;
    public string?             Email           { get; set; }
    public RoomStyle           RoomStyle       { get; set; } = RoomStyle.Standard;
    public int                 DurationInDays  { get; set; } = 1;
    public decimal             AdvancePayment  { get; set; }
    public int?                FloorPreference { get; set; }
    public ProximityPreference Proximity       { get; set; } = ProximityPreference.None;
    public string?             SpecificRoomNumber { get; set; }
}

public class CheckOutRequest
{
    public string  RoomNumber   { get; set; } = string.Empty;
    public string? DiscountCode { get; set; }
}
