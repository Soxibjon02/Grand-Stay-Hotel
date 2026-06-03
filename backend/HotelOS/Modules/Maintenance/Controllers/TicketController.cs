using HotelOS.Hubs;
using HotelOS.Modules.Maintenance.Data;
using HotelOS.Modules.Maintenance.Models;
using HotelOS.Shared;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.Maintenance.Controllers;

[ApiController]
public class TicketController : ControllerBase
{
    // TS-05: Priority Queue — ustuvorlik navbati (yuqori = birinchi)
    private static readonly PriorityQueue<int, int> _queue =
        new(Comparer<int>.Create((a, b) => b.CompareTo(a)));
    private static readonly object _lock = new();

    private readonly MaintenanceDb         _db;
    private readonly IHubContext<HotelHub> _hub;

    public TicketController(MaintenanceDb db, IHubContext<HotelHub> hub)
    {
        _db  = db;
        _hub = hub;
    }

    // GET /api/tickets — ustuvorlik tartibida
    [HttpGet("/api/tickets")]
    public async Task<IActionResult> GetAll()
    {
        var tickets = await _db.Tickets
            .OrderByDescending(t => (int)t.Priority)
            .ThenBy(t => t.ReportedAt)
            .ToListAsync();
        return Ok(tickets);
    }

    // GET /api/technicians
    [HttpGet("/api/technicians")]
    public async Task<IActionResult> GetTechnicians()
        => Ok(await _db.Technicians.ToListAsync());

    // POST /api/tickets — yangi ticket (TS-05)
    [HttpPost("/api/tickets")]
    public async Task<IActionResult> Create([FromBody] TicketRequest req)
    {
        if (string.IsNullOrWhiteSpace(req.RoomNumber) ||
            !System.Text.RegularExpressions.Regex.IsMatch(req.RoomNumber, @"^\d{3}$"))
            return BadRequest(new { message = "Noto'g'ri xona raqami (3 raqam)" });

        if (string.IsNullOrWhiteSpace(req.Description))
            return BadRequest(new { message = "Muammo tavsifi majburiy" });

        var ticket = new MaintenanceTicket
        {
            RoomNumber  = req.RoomNumber,
            Description = req.Description,
            Category    = req.Category,
            Priority    = req.Priority,
            Status      = TicketStatus.Pending,
            ReportedAt  = DateTime.UtcNow
        };
        _db.Tickets.Add(ticket);
        await _db.SaveChangesAsync();

        // Priority Queue ga qo'shish
        lock (_lock) { _queue.Enqueue(ticket.Id, (int)req.Priority); }
        ticket.Status = TicketStatus.Queued;

        // Eng kam band texnikni tayinlash
        await AssignTechnicianAsync(ticket);
        await _db.SaveChangesAsync();

        await _hub.Clients.All.SendAsync("NewEvent", new {
            type     = "TicketCreated",
            message  = $"Ticket #{ticket.Id} — Xona {req.RoomNumber} ({req.Priority})",
            room     = req.RoomNumber,
            priority = req.Priority.ToString(),
            time     = DateTime.UtcNow
        });

        return Ok(new {
            ticketId       = ticket.Id,
            priority       = ticket.Priority.ToString(),
            status         = ticket.Status.ToString(),
            technicianName = ticket.TechnicianName,
            message        = $"Ticket {ticket.Priority} ustuvorlikda qabul qilindi"
        });
    }

    // PUT /api/tickets/{id}/complete
    [HttpPut("/api/tickets/{id}/complete")]
    public async Task<IActionResult> Complete(int id)
    {
        var ticket = await _db.Tickets.FindAsync(id);
        if (ticket == null) return NotFound(new { message = "Ticket topilmadi" });

        ticket.Status      = TicketStatus.Completed;
        ticket.CompletedAt = DateTime.UtcNow;

        if (ticket.TechnicianId.HasValue)
        {
            var tech = await _db.Technicians.FindAsync(ticket.TechnicianId.Value);
            if (tech != null)
            {
                tech.IsAvailable        = true;
                tech.ActiveTicketsCount = Math.Max(0, tech.ActiveTicketsCount - 1);
            }
        }
        await _db.SaveChangesAsync();

        await _hub.Clients.All.SendAsync("NewEvent", new {
            type    = "TicketCompleted",
            message = $"Ticket #{id} — Xona {ticket.RoomNumber} hal qilindi ✓",
            room    = ticket.RoomNumber,
            time    = DateTime.UtcNow
        });

        return Ok(new { message = $"#{id} hal qilindi", ticketId = id });
    }

    // 1.2b Algoritmi: Eng kam band texnikni topib tayinlash
    private async Task AssignTechnicianAsync(MaintenanceTicket ticket)
    {
        var techs = await _db.Technicians
            .Where(t => t.IsAvailable)
            .OrderBy(t => t.ActiveTicketsCount)
            .ToListAsync();

        if (!techs.Any()) { ticket.Status = TicketStatus.Queued; return; }

        var tech = techs.First();
        ticket.TechnicianId    = tech.Id;
        ticket.TechnicianName  = tech.Name;
        ticket.AssignedAt      = DateTime.UtcNow;
        ticket.Status          = TicketStatus.Assigned;
        tech.ActiveTicketsCount++;
    }
}

public class TicketRequest
{
    public string         RoomNumber  { get; set; } = string.Empty;
    public string         Description { get; set; } = string.Empty;
    public string         Category    { get; set; } = "General";
    public TicketPriority Priority    { get; set; } = TicketPriority.Normal;
}
