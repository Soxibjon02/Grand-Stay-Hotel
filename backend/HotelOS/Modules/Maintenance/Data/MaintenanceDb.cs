using HotelOS.Modules.Maintenance.Models;
using HotelOS.Shared;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.Maintenance.Data;

public class MaintenanceDb : DbContext
{
    public MaintenanceDb(DbContextOptions<MaintenanceDb> opt) : base(opt) { }
    public DbSet<MaintenanceTicket> Tickets     { get; set; }
    public DbSet<Technician>        Technicians { get; set; }
}

public static class MaintenanceSeeder
{
    public static void Seed(MaintenanceDb db)
    {
        if (db.Technicians.Any()) return;

        db.Technicians.AddRange(
            new Technician { Id = 1, Name = "Bobur Yusupov",   Specialty = "Plumbing",    IsAvailable = true },
            new Technician { Id = 2, Name = "Sherzod Aliyev",  Specialty = "Electrical",  IsAvailable = true },
            new Technician { Id = 3, Name = "Ulmas Qodirov",   Specialty = "HVAC",        IsAvailable = true },
            new Technician { Id = 4, Name = "Timur Ergashev",  Specialty = "General",     IsAvailable = true }
        );

        // Demo ticket
        db.Tickets.Add(new MaintenanceTicket
        {
            Id          = 1,
            RoomNumber  = "205",
            Description = "Dush suvi isimayapti",
            Category    = "Plumbing",
            Priority    = TicketPriority.High,
            Status      = TicketStatus.Assigned,
            ReportedAt  = DateTime.UtcNow.AddHours(-2),
            AssignedAt  = DateTime.UtcNow.AddHours(-1),
            TechnicianId   = 1,
            TechnicianName = "Bobur Yusupov"
        });

        db.SaveChanges();
    }
}
