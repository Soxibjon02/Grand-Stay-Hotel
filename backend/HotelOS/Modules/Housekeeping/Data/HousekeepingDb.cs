using HotelOS.Modules.Housekeeping.Models;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.Housekeeping.Data;

// ── DbContext ─────────────────────────────────────────
public class HousekeepingDb : DbContext
{
    public HousekeepingDb(DbContextOptions<HousekeepingDb> opt) : base(opt) { }

    public DbSet<CleaningTask> Tasks        { get; set; }
    public DbSet<HouseKeeper>  HouseKeepers { get; set; }
}

// ── Seeder ────────────────────────────────────────────
public static class HousekeepingSeeder
{
    public static void Seed(HousekeepingDb db)
    {
        if (db.HouseKeepers.Any()) return;

        db.HouseKeepers.AddRange(
            new HouseKeeper { Id = 1, Name = "Nilufar Hasanova",  Shift = "Morning", IsAvailable = true },
            new HouseKeeper { Id = 2, Name = "Sardor Toshmatov",  Shift = "Morning", IsAvailable = true },
            new HouseKeeper { Id = 3, Name = "Barno Mirzayeva",   Shift = "Evening", IsAvailable = true },
            new HouseKeeper { Id = 4, Name = "Jasur Nazarov",     Shift = "Evening", IsAvailable = true }
        );

        // Demo: 1 ta kutilayotgan tozalash
        db.Tasks.Add(new CleaningTask
        {
            Id          = 1,
            RoomNumber  = "101",
            Description = "Mehmon chiqdi — standart tozalash",
            Status      = HotelOS.Shared.CleaningTaskStatus.Pending,
            CreatedAt   = DateTime.UtcNow.AddMinutes(-10)
        });

        db.SaveChanges();
    }
}
