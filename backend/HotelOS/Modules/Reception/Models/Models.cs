using HotelOS.Shared;

namespace HotelOS.Modules.Reception.Models;

// ── Xona modeli ───────────────────────────────────────
public class Room
{
    public int            Id             { get; set; }
    public string         RoomNumber     { get; set; } = string.Empty;
    public int            Floor          { get; set; }
    public RoomStyle      Style          { get; set; } = RoomStyle.Standard;
    public RoomStatus     Status         { get; set; } = RoomStatus.Available;
    public CleaningStatus CleaningStatus { get; set; } = CleaningStatus.Clean;
    public decimal        NightlyRate    { get; set; } = 100m;
    public int            Capacity       { get; set; } = 2;
    public bool           HasMiniBar     { get; set; }
    public bool           HasBalcony     { get; set; }
    public DateTime?      LastCleanedAt  { get; set; }

    public void CheckOut()
    {
        Status         = RoomStatus.Available;
        CleaningStatus = CleaningStatus.Dirty;
    }
}

// ── Mehmon ────────────────────────────────────────────
public class Guest
{
    public int    Id          { get; set; }
    public string Name        { get; set; } = string.Empty;
    public string Email       { get; set; } = string.Empty;
    public string PhoneNumber  { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string Role         { get; set; } = "User";
}

// ── Bron ─────────────────────────────────────────────
public class RoomBooking
{
    public int                 Id                  { get; set; }
    public string              ReservationNumber   { get; set; } =
        $"GS-{DateTime.UtcNow:yyyyMMdd}-{Guid.NewGuid().ToString()[..4].ToUpper()}";
    public int                 GuestId             { get; set; }
    public Guest?              Guest               { get; set; }
    public int?                RoomId              { get; set; }
    public Room?               Room                { get; set; }
    public DateTime            StartDate           { get; set; }
    public int                 DurationInDays      { get; set; }
    public decimal             AdvancePayment      { get; set; }
    public BookingStatus       Status              { get; set; } = BookingStatus.Confirmed;
    public DateTime?           CheckIn             { get; set; }
    public DateTime?           CheckOut            { get; set; }
    public int?                FloorPreference     { get; set; }
    public ProximityPreference ProximityPreference { get; set; } = ProximityPreference.None;
}

// ── Xona kaliti ───────────────────────────────────────
public class RoomKey
{
    public int  Id       { get; set; }
    public int  RoomId   { get; set; }
    public bool Active   { get; set; } = true;
    public bool IsMaster { get; set; }
}

// ── Hisob-faktura ─────────────────────────────────────
public class Invoice
{
    public int      Id             { get; set; }
    public int      BookingId      { get; set; }
    public string   RoomNumber     { get; set; } = string.Empty;
    public string   GuestName      { get; set; } = string.Empty;
    public decimal  NightlyRate    { get; set; }
    public int      DaysStayed     { get; set; }
    public decimal  SubTotal       { get; set; }
    public string?  DiscountCode   { get; set; }
    public decimal  DiscountAmount { get; set; }
    public decimal  TotalAmount    { get; set; }
    public decimal  PaidAmount     { get; set; }
    public decimal  BalanceDue     { get; set; }
    public decimal  RefundAmount   { get; set; }
    public DateTime IssuedAt       { get; set; } = DateTime.UtcNow;
}
