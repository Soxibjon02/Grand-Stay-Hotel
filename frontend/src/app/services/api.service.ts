// ============================================================
// GrandStay HotelOS — API Service
// Modular Monolith: barcha endpoint bitta URL da (:5050)
// ============================================================
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { SignalRService } from './signalr.service';

// Bitta backend URL — microservice emas, modular monolith
const API = 'http://localhost:5050';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private signalR = inject(SignalRService);

  private safe<T>(obs: Observable<T>, fallback: T): Observable<T> {
    return obs.pipe(catchError(e => { console.error(e); return of(fallback); }));
  }

  private logEvent(icon: string, eventName: string, message: string) {
    this.signalR.latestEvent.set({
      id: Date.now().toString() + Math.random(),
      icon,
      eventName,
      message,
      publisher: 'Lokal tizim',
      occurredAt: new Date().toISOString()
    });
  }

  // ── USER PANEL ─────────────────────────────────────────
  register(body: any) { return this.safe(this.http.post<any>(`${API}/api/auth/register`, body), null); }
  login(body: any)    { return this.safe(this.http.post<any>(`${API}/api/auth/login`, body), null); }
  getAvailableRooms() { return this.safe(this.http.get<any[]>(`${API}/api/userpanel/rooms`), []); }
  getMyBookings(guestId: number) { return this.safe(this.http.get<any[]>(`${API}/api/userpanel/my-bookings/${guestId}`), []); }
  bookRoom(body: any) { 
    return this.safe(this.http.post<any>(`${API}/api/userpanel/book`, body).pipe(
      tap(() => this.logEvent('🛎️', 'Yangi Bron', `Saytdan bron: ${body.roomNumber}`))
    ), null); 
  }
  reportIssue(body: any) {
    return this.safe(this.http.post<any>(`${API}/api/userpanel/report-issue`, body).pipe(
      tap(() => this.logEvent('⚠️', 'Mijoz Shikoyati', `Mijoz tomonidan muammo yuborildi.`))
    ), null);
  }

  // ── RECEPTION ──────────────────────────────────────────
  getRooms()    { return this.safe(this.http.get<any[]>(`${API}/api/rooms`), []); }
  getBookings() { return this.safe(this.http.get<any[]>(`${API}/api/bookings`), []); }
  getGuests()   { return this.safe(this.http.get<any[]>(`${API}/api/guests`), []); }

  checkIn(body: any)  { 
    return this.safe(this.http.post<any>(`${API}/api/checkin`, body).pipe(
      tap(() => this.logEvent('🛎️', 'Yangi Check-in', `Mehmon ro'yxatdan o'tdi: ${body.roomId || 'Noma\'lum xona'}`))
    ), null); 
  }
  checkOut(body: any) { 
    return this.safe(this.http.post<any>(`${API}/api/checkout`, body).pipe(
      tap(() => this.logEvent('📤', 'Check-Out', `Xona ${body.roomNumber} bo'shatildi`))
    ), null); 
  }
  cancelBooking(id: number) { 
    return this.safe(this.http.post<any>(`${API}/api/cancel/${id}`, {}).pipe(
      tap(() => this.logEvent('❌', 'Bekor Qilish', `Bron #${id} bekor qilindi`))
    ), null); 
  }
  confirmBooking(id: number) { 
    return this.safe(this.http.post<any>(`${API}/api/confirm/${id}`, {}).pipe(
      tap(() => this.logEvent('✅', 'Tasdiqlash', `Bron #${id} tasdiqlandi`))
    ), null); 
  }

  // ── HOUSEKEEPING ───────────────────────────────────────
  getCleaningTasks() { return this.safe(this.http.get<any[]>(`${API}/api/cleaning/tasks`), []); }
  getHousekeepers()  { return this.safe(this.http.get<any[]>(`${API}/api/housekeepers`), []); }

  startCleaning(id: number, housekeeperId?: number) {
    return this.safe(this.http.post<any>(`${API}/api/cleaning/${id}/start`, { housekeeperId }).pipe(
      tap(() => this.logEvent('🧹', 'Tozalash boshlandi', `Xona ID/Task: ${id}`))
    ), null);
  }
  completeCleaning(id: number) {
    return this.safe(this.http.put<any>(`${API}/api/cleaning/${id}/complete`, {}).pipe(
      tap(() => this.logEvent('✨', 'Tozalash yakunlandi', `Xona toza: ${id}`))
    ), null);
  }

  // ── ROOM SERVICE ───────────────────────────────────────
  getOrders()           { return this.safe(this.http.get<any[]>(`${API}/api/orders`), []); }
  createOrder(body: any){ 
    return this.safe(this.http.post<any>(`${API}/api/orders`, body).pipe(
      tap(() => this.logEvent('🍔', 'Yangi Buyurtma', `Xona uchun xizmat buyurtma qilindi.`))
    ), null); 
  }
  nextOrderStatus(id: number) {
    return this.safe(this.http.put<any>(`${API}/api/orders/${id}/next`, {}).pipe(
      tap(() => this.logEvent('✅', 'Buyurtma Holati', `Buyurtma #${id} holati o'zgardi.`))
    ), null);
  }

  // ── MAINTENANCE ────────────────────────────────────────
  getTickets()           { return this.safe(this.http.get<any[]>(`${API}/api/tickets`), []); }
  getTechnicians()       { return this.safe(this.http.get<any[]>(`${API}/api/technicians`), []); }
  createTicket(body: any){ 
    return this.safe(this.http.post<any>(`${API}/api/tickets`, body).pipe(
      tap(() => this.logEvent('🛠️', 'Yangi Muammo', `Ta'mirlash uchun xabar tushdi.`))
    ), null); 
  }
  completeTicket(id: number) {
    return this.safe(this.http.put<any>(`${API}/api/tickets/${id}/complete`, {}).pipe(
      tap(() => this.logEvent('✅', 'Muammo Hal Qilindi', `Ticket #${id} yopildi.`))
    ), null);
  }

  // ── DASHBOARD ──────────────────────────────────────────
  getDashboardState() { return this.safe(this.http.get<any>(`${API}/api/dashboard/state`), null); }
}
