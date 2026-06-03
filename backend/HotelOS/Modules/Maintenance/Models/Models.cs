using HotelOS.Shared;

namespace HotelOS.Modules.Maintenance.Models;

// ── Texnik muammo ticketi ─────────────────────────────
// Priority Queue bilan ustuvorlik tartibida ishlanadi (TS-05)
public class MaintenanceTicket
{
    public int            Id             { get; set; }
    public string         RoomNumber     { get; set; } = string.Empty;
    public string         Description    { get; set; } = string.Empty;
    public string         Category       { get; set; } = "General";
    public TicketPriority Priority       { get; set; } = TicketPriority.Normal;
    public TicketStatus   Status         { get; set; } = TicketStatus.Pending;
    public DateTime       ReportedAt     { get; set; } = DateTime.UtcNow;
    public DateTime?      AssignedAt     { get; set; }
    public DateTime?      CompletedAt    { get; set; }
    public int?           TechnicianId   { get; set; }
    public string?        TechnicianName { get; set; }
}

// ── Texnik mutaxassis ─────────────────────────────────
public class Technician
{
    public int    Id                 { get; set; }
    public string Name               { get; set; } = string.Empty;
    public string Specialty          { get; set; } = string.Empty;
    public bool   IsAvailable        { get; set; } = true;
    public int    ActiveTicketsCount { get; set; }
}
