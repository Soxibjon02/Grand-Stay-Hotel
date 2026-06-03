using HotelOS.Modules.Reception.Data;
using HotelOS.Modules.Reception.Models;
using HotelOS.Shared;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.Reception.Services;

// ── TS-02: Billing — hisob-faktura hisoblash ──────────
public class BillingService
{
    private readonly ReceptionDb _db;

    // Chegirma kodlari
    private static readonly Dictionary<string, decimal> DiscountCodes = new(StringComparer.OrdinalIgnoreCase)
    {
        ["HOTEL10"] = 0.10m,
        ["VIP20"]   = 0.20m,
        ["STAFF50"] = 0.50m,
    };

    // Bekor qilish uchun to'liq qaytarish chegarasi (soat)
    private const double FULL_REFUND_HOURS = 24.0;

    public BillingService(ReceptionDb db) => _db = db;

    public async Task<Invoice> CalculateInvoiceAsync(
        RoomBooking booking, DateTime checkoutTime, string? discountCode = null)
    {
        var room  = booking.Room ?? await _db.Rooms.FindAsync(booking.RoomId);
        var guest = booking.Guest ?? await _db.Guests.FindAsync(booking.GuestId);

        var nightlyRate = room?.NightlyRate ?? 100m;
        var daysStayed  = Math.Max(1, (int)Math.Ceiling((checkoutTime - booking.StartDate).TotalDays));

        var subtotal       = nightlyRate * daysStayed;
        var discountRate   = discountCode != null && DiscountCodes.TryGetValue(discountCode, out var d) ? d : 0m;
        var discountAmount = subtotal * discountRate;
        var totalAmount    = subtotal - discountAmount;
        var balanceDue     = Math.Max(0, totalAmount - booking.AdvancePayment);
        var refundAmount   = Math.Max(0, booking.AdvancePayment - totalAmount);

        var invoice = new Invoice
        {
            BookingId      = booking.Id,
            RoomNumber     = room?.RoomNumber ?? "",
            GuestName      = guest?.Name ?? "Noma'lum",
            NightlyRate    = nightlyRate,
            DaysStayed     = daysStayed,
            SubTotal       = subtotal,
            DiscountCode   = discountCode,
            DiscountAmount = discountAmount,
            TotalAmount    = totalAmount,
            PaidAmount     = booking.AdvancePayment,
            BalanceDue     = balanceDue,
            RefundAmount   = refundAmount,
            IssuedAt       = DateTime.UtcNow
        };

        booking.CheckOut = checkoutTime;
        booking.Status   = BookingStatus.CheckedOut;

        _db.Invoices.Add(invoice);
        await _db.SaveChangesAsync();

        return invoice;
    }

    public decimal CalculateCancellationRefund(RoomBooking booking)
    {
        var hours = (booking.StartDate - DateTime.UtcNow).TotalHours;
        return hours >= FULL_REFUND_HOURS ? booking.AdvancePayment : 0m;
    }
}
