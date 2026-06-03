using HotelOS.Modules.Housekeeping.Data;
using HotelOS.Modules.Maintenance.Data;
using HotelOS.Modules.Reception.Data;
using HotelOS.Modules.RoomService.Data;
using HotelOS.Shared;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.Dashboard.Controllers;

[ApiController]
public class DashboardController : ControllerBase
{
    // Modular monolithning afzalligi: barcha DB lar bitta jarayonda
    // HTTP call kerak emas — to'g'ridan-to'g'ri inject qilinadi
    private readonly ReceptionDb    _recDb;
    private readonly HousekeepingDb _hsDb;
    private readonly RoomServiceDb  _rsDb;
    private readonly MaintenanceDb  _mtDb;

    public DashboardController(
        ReceptionDb recDb, HousekeepingDb hsDb,
        RoomServiceDb rsDb, MaintenanceDb mtDb)
    {
        _recDb = recDb;
        _hsDb  = hsDb;
        _rsDb  = rsDb;
        _mtDb  = mtDb;
    }

    // GET /api/dashboard/state — barcha modullardan statistika
    [HttpGet("/api/dashboard/state")]
    public async Task<IActionResult> GetState()
    {
        var totalRooms     = await _recDb.Rooms.CountAsync();
        var occupied       = await _recDb.Rooms.CountAsync(r => r.Status == RoomStatus.Occupied);
        var available      = await _recDb.Rooms.CountAsync(r => r.Status == RoomStatus.Available);
        var cleaning       = await _recDb.Rooms.CountAsync(r => r.Status == RoomStatus.BeingServiced);
        var activeBookings = await _recDb.Bookings.CountAsync(b => b.Status == BookingStatus.CheckedIn);

        var pendingClean  = await _hsDb.Tasks.CountAsync(t => t.Status == CleaningTaskStatus.Pending);
        var inProgressClean = await _hsDb.Tasks.CountAsync(t => t.Status == CleaningTaskStatus.InProgress);

        var pendingOrders = await _rsDb.Orders.CountAsync(o => o.Status == OrderStatus.Received);
        var activeOrders  = await _rsDb.Orders.CountAsync(o =>
            o.Status == OrderStatus.Preparing || o.Status == OrderStatus.Delivering);

        var openTickets    = await _mtDb.Tickets.CountAsync(t =>
            t.Status != TicketStatus.Completed && t.Status != TicketStatus.Canceled);
        var criticalTickets = await _mtDb.Tickets.CountAsync(t =>
            t.Priority == TicketPriority.Critical && t.Status != TicketStatus.Completed);

        // Barcha xonalar holati (dashboard map uchun)
        var rooms = await _recDb.Rooms
            .OrderBy(r => r.Floor).ThenBy(r => r.RoomNumber)
            .Select(r => new {
                r.Id, r.RoomNumber, r.Floor,
                status        = r.Status.ToString(),
                cleaningStatus= r.CleaningStatus.ToString(),
                style         = r.Style.ToString(),
                r.NightlyRate
            })
            .ToListAsync();

        // So'nggi hodisalar
        var recentTasks = await _hsDb.Tasks
            .OrderByDescending(t => t.CreatedAt).Take(5)
            .Select(t => new { t.RoomNumber, status = t.Status.ToString(), t.CreatedAt })
            .ToListAsync();

        return Ok(new
        {
            stats = new {
                totalRooms, occupied, available, cleaning, activeBookings,
                pendingClean, inProgressClean,
                pendingOrders, activeOrders,
                openTickets, criticalTickets,
                occupancyRate = totalRooms > 0 ? Math.Round((double)occupied / totalRooms * 100, 1) : 0
            },
            rooms,
            recentActivity = recentTasks
        });
    }
}
