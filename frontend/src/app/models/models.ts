// ============================================================
// GrandStay HotelOS — Shared Models
// ============================================================

export interface Room {
  id: number;
  roomNumber: string;
  floor: number;
  style: string;
  status: string;
  cleaningStatus: string;
  bookingPrice: number;
  lastCleanedAt?: string;
}

export interface Booking {
  id: number;
  reservationNumber: string;
  status: string;
  startDate: string;
  durationInDays: number;
  checkIn?: string;
  checkOut?: string;
  advancePayment: number;
  guestName: string;
  roomNumber: string;
  roomStyle: string;
  floor: number;
}

export interface Guest {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface CleaningTask {
  id: number;
  roomNumber: string;
  description: string;
  status: string;
  createdAt: string;
  startedAt?: string;
  completedAt?: string;
  housekeeperName?: string;
  houseKeeperId?: number;
}

export interface HouseKeeper {
  id: number;
  name: string;
  isAvailable: boolean;
  activeTasksCount: number;
}

export interface ServiceOrder {
  id: number;
  roomNumber: string;
  guestName: string;
  items: string;
  totalAmount: number;
  status: string;
  isChargable: boolean;
  createdAt: string;
}

export interface MaintenanceTicket {
  id: number;
  roomNumber: string;
  description: string;
  priority: string;
  status: string;
  reportedAt: string;
  assignedAt?: string;
  completedAt?: string;
  technicianName?: string;
}

export interface Technician {
  id: number;
  name: string;
  specialty: string;
  isAvailable: boolean;
  activeTicketsCount: number;
}

export interface LiveEvent {
  id: number;
  eventName: string;
  icon: string;
  message: string;
  publisher: string;
  timestamp: string;
}

export interface DashboardStats {
  availableRooms: number;
  activeOrders: number;
  openTickets: number;
  criticalTickets: number;
  completedToday: number;
}

export interface CheckInRequest {
  guestName: string;
  email?: string;
  roomStyle: number;
  floorPreference?: number;
  durationInDays: number;
  advancePayment: number;
  proximity: number;
}

export interface CheckOutRequest {
  roomNumber: string;
  discountCode?: string;
}
