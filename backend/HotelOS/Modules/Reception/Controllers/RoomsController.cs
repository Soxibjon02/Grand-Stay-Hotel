using HotelOS.Modules.Reception.Data;
using HotelOS.Shared;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.Reception.Controllers;

[ApiController]
public class RoomsController : ControllerBase
{
    private readonly ReceptionDb _db;
    public RoomsController(ReceptionDb db) => _db = db;

    // GET /api/rooms — barcha xonalar
    [HttpGet("/api/rooms")]
    public async Task<IActionResult> GetAll()
    {
        var rooms = await _db.Rooms
            .OrderBy(r => r.Floor).ThenBy(r => r.RoomNumber)
            .ToListAsync();
        return Ok(rooms);
    }

    // GET /api/rooms/available?style=Standard
    [HttpGet("/api/rooms/available")]
    public async Task<IActionResult> GetAvailable([FromQuery] string? style)
    {
        var query = _db.Rooms
            .Where(r => r.Status         == RoomStatus.Available
                     && r.CleaningStatus == CleaningStatus.Clean);

        if (!string.IsNullOrEmpty(style) && Enum.TryParse<RoomStyle>(style, out var rs))
            query = query.Where(r => r.Style == rs);

        return Ok(await query.OrderBy(r => r.RoomNumber).ToListAsync());
    }
}
