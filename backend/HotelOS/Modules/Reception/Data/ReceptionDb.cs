using HotelOS.Modules.Reception.Models;
using HotelOS.Shared;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.Reception.Data;

// ── DbContext ─────────────────────────────────────────
public class ReceptionDb : DbContext
{
    public ReceptionDb(DbContextOptions<ReceptionDb> opt) : base(opt) { }

    public DbSet<Room>        Rooms    { get; set; }
    public DbSet<Guest>       Guests   { get; set; }
    public DbSet<RoomBooking> Bookings { get; set; }
    public DbSet<RoomKey>     RoomKeys { get; set; }
    public DbSet<Invoice>     Invoices { get; set; }
}

// ── Seeder ────────────────────────────────────────────
public static class ReceptionSeeder
{
    public static void Seed(ReceptionDb db)
    {
        if (db.Rooms.Any()) return;

        var rooms = new List<Room>();
        int id = 1;
        var rnd = new Random();

        var statuses = new[] { RoomStatus.Available, RoomStatus.Occupied, RoomStatus.Reserved, RoomStatus.BeingServiced, RoomStatus.NotAvailable };
        var cleaningStatuses = new[] { CleaningStatus.Clean, CleaningStatus.Dirty, CleaningStatus.InProgress };

        // 1-qavat: Standard xonalar (101–110)
        for (int i = 1; i <= 10; i++)
        {
            rooms.Add(new Room
            {
                Id          = id++,
                RoomNumber  = $"1{i:D2}",
                Floor       = 1,
                Style       = RoomStyle.Standard,
                NightlyRate = 80m,
                Capacity    = 2,
                HasMiniBar  = i % 3 == 0,
                Status      = RoomStatus.Available,
                CleaningStatus = CleaningStatus.Clean
            });
        }

        // 2-qavat: Deluxe + FamilySuite (201–210)
        for (int i = 1; i <= 6; i++)
        {
            rooms.Add(new Room
            {
                Id          = id++,
                RoomNumber  = $"2{i:D2}",
                Floor       = 2,
                Style       = RoomStyle.Deluxe,
                NightlyRate = 150m,
                Capacity    = 2,
                HasMiniBar  = true,
                HasBalcony  = i % 2 == 0,
                Status      = RoomStatus.Available,
                CleaningStatus = CleaningStatus.Clean
            });
        }
        for (int i = 7; i <= 10; i++)
        {
            rooms.Add(new Room
            {
                Id          = id++,
                RoomNumber  = $"2{i:D2}",
                Floor       = 2,
                Style       = RoomStyle.FamilySuite,
                NightlyRate = 220m,
                Capacity    = 4,
                HasMiniBar  = true,
                HasBalcony  = true,
                Status      = RoomStatus.Available,
                CleaningStatus = CleaningStatus.Clean
            });
        }

        db.Rooms.AddRange(rooms);

        // Demo mehmonlar
        db.Guests.AddRange(
            new Guest { Id = 1, Name = "Alisher Umarov",  Email = "alisher@mail.uz", PhoneNumber = "+998901234567", Role = "User" },
            new Guest { Id = 2, Name = "Malika Yusupova", Email = "malika@mail.uz",  PhoneNumber = "+998907654321", Role = "User" },
            new Guest { Id = 3, Name = "Admin", Email = "admin@gmail.com", PasswordHash = "admin123", Role = "Admin" }
        );

        db.SaveChanges();
    }
}
