using HotelOS.Hubs;
using HotelOS.Modules.Housekeeping.Data;
using HotelOS.Modules.Housekeeping.Models;
using HotelOS.Modules.Reception.Data;
using HotelOS.Shared;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.Housekeeping.Controllers;

[ApiController]
public class CleaningController : ControllerBase
{
    private readonly HousekeepingDb        _db;
    private readonly ReceptionDb           _recDb;   // Reception moduli bilan to'g'ridan-to'g'ri muloqot
    private readonly IHubContext<HotelHub> _hub;

    public CleaningController(HousekeepingDb db, ReceptionDb recDb, IHubContext<HotelHub> hub)
    {
        _db    = db;
        _recDb = recDb;
        _hub   = hub;
    }

    // GET /api/cleaning/tasks — barcha vazifalar
    [HttpGet("/api/cleaning/tasks")]
    public async Task<IActionResult> GetTasks()
    {
        var tasks = await _db.Tasks
            .OrderBy(t => t.Status)
            .ThenByDescending(t => t.CreatedAt)
            .ToListAsync();
        return Ok(tasks);
    }

    // GET /api/housekeepers — barcha xodimlar
    [HttpGet("/api/housekeepers")]
    public async Task<IActionResult> GetHousekeepers()
    {
        return Ok(await _db.HouseKeepers.ToListAsync());
    }

    // POST /api/cleaning/{id}/start — vazifani boshlash
    [HttpPost("/api/cleaning/{id}/start")]
    public async Task<IActionResult> Start(int id, [FromBody] StartRequest? req)
    {
        var task = await _db.Tasks.FindAsync(id);
        if (task == null) return NotFound(new { message = "Vazifa topilmadi" });

        task.Status    = CleaningTaskStatus.InProgress;
        task.StartedAt = DateTime.UtcNow;

        if (req?.HouseKeeperId.HasValue == true)
        {
            var hk = await _db.HouseKeepers.FindAsync(req.HouseKeeperId.Value);
            if (hk != null)
            {
                task.HouseKeeperId   = hk.Id;
                task.HousekeeperName = hk.Name;
                hk.IsAvailable       = false;
            }
        }
        await _db.SaveChangesAsync();

        await _hub.Clients.All.SendAsync("NewEvent", new {
            type    = "CleaningStarted",
            message = $"Xona {task.RoomNumber} tozalanmoqda",
            room    = task.RoomNumber,
            time    = DateTime.UtcNow
        });

        return Ok(new { message = $"Tozalash boshlandi — Xona {task.RoomNumber}", taskId = id });
    }

    // PUT /api/cleaning/{id}/complete — tugallash
    [HttpPut("/api/cleaning/{id}/complete")]
    public async Task<IActionResult> Complete(int id)
    {
        var task = await _db.Tasks.FindAsync(id);
        if (task == null) return NotFound(new { message = "Vazifa topilmadi" });

        task.Status      = CleaningTaskStatus.Done;
        task.CompletedAt = DateTime.UtcNow;

        // Xodimni bo'shatish
        if (task.HouseKeeperId.HasValue)
        {
            var hk = await _db.HouseKeepers.FindAsync(task.HouseKeeperId.Value);
            if (hk != null) hk.IsAvailable = true;
        }
        await _db.SaveChangesAsync();

        // Reception moduli bilan to'g'ridan-to'g'ri integratsiya:
        // Tozalash tugadi → xona holati "Available + Clean" bo'ladi
        var room = await _recDb.Rooms.FirstOrDefaultAsync(r => r.RoomNumber == task.RoomNumber);
        if (room != null)
        {
            room.Status         = RoomStatus.Available;
            room.CleaningStatus = CleaningStatus.Clean;
            room.LastCleanedAt  = DateTime.UtcNow;
            await _recDb.SaveChangesAsync();

            await _hub.Clients.All.SendAsync("RoomStatusChanged", new {
                roomNumber = room.RoomNumber,
                status     = room.Status.ToString(),
                style      = room.Style.ToString()
            });
        }

        await _hub.Clients.All.SendAsync("NewEvent", new {
            type    = "CleaningDone",
            message = $"Xona {task.RoomNumber} tozalandi ✓",
            room    = task.RoomNumber,
            time    = DateTime.UtcNow
        });

        return Ok(new { message = $"Xona {task.RoomNumber} tozalandi", taskId = id });
    }
}

public class StartRequest
{
    public int? HouseKeeperId { get; set; }
}
