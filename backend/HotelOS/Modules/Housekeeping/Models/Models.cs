using HotelOS.Shared;

namespace HotelOS.Modules.Housekeeping.Models;

// ── Tozalash vazifasi ─────────────────────────────────
public class CleaningTask
{
    public int                Id              { get; set; }
    public string             RoomNumber      { get; set; } = string.Empty;
    public string             Description     { get; set; } = string.Empty;
    public CleaningTaskStatus Status          { get; set; } = CleaningTaskStatus.Pending;
    public int?               HouseKeeperId   { get; set; }
    public string?            HousekeeperName { get; set; }
    public DateTime           CreatedAt       { get; set; } = DateTime.UtcNow;
    public DateTime?          StartedAt       { get; set; }
    public DateTime?          CompletedAt     { get; set; }
}

// ── Tozalovchi xodim ─────────────────────────────────
public class HouseKeeper
{
    public int    Id          { get; set; }
    public string Name        { get; set; } = string.Empty;
    public string Shift       { get; set; } = "Morning";
    public bool   IsAvailable { get; set; } = true;
}
