using Microsoft.AspNetCore.SignalR;

namespace HotelOS.Hubs;

// ── SignalR Hub ───────────────────────────────────────
// Angular SignalRService shu hubga ulanadi
// Broadcast metodlari:
//   "NewEvent"          → LiveEvent feed
//   "RoomStatusChanged" → Xona holati yangilandi
//   "StatsUpdated"      → Dashboard statistika
public class HotelHub : Hub
{
    public override async Task OnConnectedAsync()
    {
        await Clients.Caller.SendAsync("Connected", new
        {
            connectionId = Context.ConnectionId,
            message      = "GrandStay HotelOS ga xush kelibsiz!",
            time         = DateTime.UtcNow
        });
        await base.OnConnectedAsync();
    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        await base.OnDisconnectedAsync(exception);
    }
}
