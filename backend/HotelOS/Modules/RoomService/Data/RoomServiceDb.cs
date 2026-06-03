using HotelOS.Modules.RoomService.Models;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.RoomService.Data;

public class RoomServiceDb : DbContext
{
    public RoomServiceDb(DbContextOptions<RoomServiceDb> opt) : base(opt) { }
    public DbSet<ServiceOrder> Orders { get; set; }
}
