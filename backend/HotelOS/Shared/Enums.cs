namespace HotelOS.Shared;

// ── Xona holatlari ────────────────────────────────────
public enum RoomStatus    { Available, Occupied, Reserved, BeingServiced, NotAvailable }
public enum RoomStyle     { Standard, Deluxe, FamilySuite, BusinessSuite }
public enum CleaningStatus{ Clean, Dirty, InProgress }

// ── Bron holatlari ────────────────────────────────────
public enum BookingStatus { Pending, Confirmed, CheckedIn, CheckedOut, Canceled }

// ── Tozalash holatlari ────────────────────────────────
public enum CleaningTaskStatus { Pending, InProgress, Done }

// ── Buyurtma holatlari ────────────────────────────────
public enum OrderStatus   { Received, Preparing, Delivering, Delivered, Canceled }

// ── Texnik ticket holatlari ───────────────────────────
public enum TicketStatus  { Pending, Queued, Assigned, InProgress, Completed, Canceled }
public enum TicketPriority{ Low = 1, Normal = 2, High = 3, Critical = 4 }

// ── Boshqalar ─────────────────────────────────────────
public enum ProximityPreference { None, NearElevator, NearStairs, Quiet, CityView }
