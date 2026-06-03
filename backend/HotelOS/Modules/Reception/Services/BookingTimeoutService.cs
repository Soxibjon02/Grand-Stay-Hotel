using HotelOS.Hubs;
using HotelOS.Modules.Reception.Data;
using HotelOS.Modules.Reception.Models;
using HotelOS.Shared;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.Reception.Services;

public class BookingTimeoutService : BackgroundService
{
    private readonly IServiceProvider _serviceProvider;
    private readonly ILogger<BookingTimeoutService> _logger;

    public BookingTimeoutService(IServiceProvider serviceProvider, ILogger<BookingTimeoutService> logger)
    {
        _serviceProvider = serviceProvider;
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                await CheckTimeoutsAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Taymer xatosi yuz berdi");
            }
            // Har 1 daqiqada tekshiradi
            await Task.Delay(TimeSpan.FromMinutes(1), stoppingToken);
        }
    }

    private async Task CheckTimeoutsAsync()
    {
        using var scope = _serviceProvider.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<ReceptionDb>();
        var hub = scope.ServiceProvider.GetRequiredService<IHubContext<HotelHub>>();

        // Pending (Kutilyapti) bo'lgan va 10 daqiqadan oshgan bronlarni qidirish
        // Eslatma: Bron qilinganda StartDate = DateTime.UtcNow olinadi.
        var cutoffTime = DateTime.UtcNow.AddMinutes(-10);
        
        var expiredBookings = await db.Bookings
            .Include(b => b.Room)
            .Include(b => b.Guest)
            .Where(b => b.Status == BookingStatus.Pending && b.StartDate < cutoffTime)
            .ToListAsync();

        if (expiredBookings.Any())
        {
            foreach (var booking in expiredBookings)
            {
                booking.Status = BookingStatus.Canceled;
                if (booking.Room != null)
                {
                    booking.Room.Status = RoomStatus.Available;
                }
                _logger.LogInformation("Bron {0} vaqt (10 daqiqa) tugagani uchun bekor qilindi.", booking.ReservationNumber);
            }
            
            await db.SaveChangesAsync();

            // Broadcast stats & events
            var stats = new
            {
                totalRooms    = await db.Rooms.CountAsync(),
                occupied      = await db.Rooms.CountAsync(r => r.Status == RoomStatus.Occupied),
                available     = await db.Rooms.CountAsync(r => r.Status == RoomStatus.Available),
                activeBookings= await db.Bookings.CountAsync(b => b.Status == BookingStatus.CheckedIn)
            };
            await hub.Clients.All.SendAsync("StatsUpdated", stats);

            foreach (var booking in expiredBookings)
            {
                if (booking.Room != null)
                {
                    await hub.Clients.All.SendAsync("RoomStatusChanged", new {
                        roomNumber = booking.Room.RoomNumber,
                        status     = booking.Room.Status.ToString(),
                        style      = booking.Room.Style.ToString(),
                        cleaning   = booking.Room.CleaningStatus.ToString()
                    });
                }

                await hub.Clients.All.SendAsync("NewEvent", new {
                    type    = "Timeout",
                    message = $"10 daqiqa tugadi: {booking.Guest?.Name} ning broni bekor bo'ldi",
                    time    = DateTime.UtcNow
                });
            }
        }
    }
}
