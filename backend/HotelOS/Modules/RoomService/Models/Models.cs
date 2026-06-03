using HotelOS.Shared;

namespace HotelOS.Modules.RoomService.Models;

// ── Xona xizmati buyurtmasi ───────────────────────────
// FIFO Queue tuzilmasida qayta ishlanadi (TS-04)
public class ServiceOrder
{
    public int         Id          { get; set; }
    public string      RoomNumber  { get; set; } = string.Empty;
    public string      GuestName   { get; set; } = "Mehmon";
    public string      Items       { get; set; } = string.Empty;
    public decimal     TotalAmount { get; set; }
    public OrderStatus Status      { get; set; } = OrderStatus.Received;
    public DateTime    CreatedAt   { get; set; } = DateTime.UtcNow;
    public DateTime?   UpdatedAt   { get; set; }
    public string?     Notes       { get; set; }
    public string      Priority    { get; set; } = "Oddiy"; // Oddiy, O'rta, Shoshilinch, Kritik
}
