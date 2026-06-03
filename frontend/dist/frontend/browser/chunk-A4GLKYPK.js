import {
  HttpClient,
  Injectable,
  catchError,
  inject,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MXKFRPZY.js";

// src/app/services/api.service.ts
var API = "http://localhost:5000";
var ApiService = class _ApiService {
  constructor() {
    this.http = inject(HttpClient);
  }
  safe(obs, fallback) {
    return obs.pipe(catchError((e) => {
      console.error(e);
      return of(fallback);
    }));
  }
  // ── RECEPTION ──────────────────────────────────────────
  getRooms() {
    return this.safe(this.http.get(`${API}/api/rooms`), []);
  }
  getBookings() {
    return this.safe(this.http.get(`${API}/api/bookings`), []);
  }
  getGuests() {
    return this.safe(this.http.get(`${API}/api/guests`), []);
  }
  checkIn(body) {
    return this.safe(this.http.post(`${API}/api/checkin`, body), null);
  }
  checkOut(body) {
    return this.safe(this.http.post(`${API}/api/checkout`, body), null);
  }
  cancelBooking(id) {
    return this.safe(this.http.post(`${API}/api/cancel/${id}`, {}), null);
  }
  // ── HOUSEKEEPING ───────────────────────────────────────
  getCleaningTasks() {
    return this.safe(this.http.get(`${API}/api/cleaning/tasks`), []);
  }
  getHousekeepers() {
    return this.safe(this.http.get(`${API}/api/housekeepers`), []);
  }
  startCleaning(id, housekeeperId) {
    return this.safe(this.http.post(`${API}/api/cleaning/${id}/start`, { housekeeperId }), null);
  }
  completeCleaning(id) {
    return this.safe(this.http.put(`${API}/api/cleaning/${id}/complete`, {}), null);
  }
  // ── ROOM SERVICE ───────────────────────────────────────
  getOrders() {
    return this.safe(this.http.get(`${API}/api/orders`), []);
  }
  createOrder(body) {
    return this.safe(this.http.post(`${API}/api/orders`, body), null);
  }
  nextOrderStatus(id) {
    return this.safe(this.http.put(`${API}/api/orders/${id}/next`, {}), null);
  }
  // ── MAINTENANCE ────────────────────────────────────────
  getTickets() {
    return this.safe(this.http.get(`${API}/api/tickets`), []);
  }
  getTechnicians() {
    return this.safe(this.http.get(`${API}/api/technicians`), []);
  }
  createTicket(body) {
    return this.safe(this.http.post(`${API}/api/tickets`, body), null);
  }
  completeTicket(id) {
    return this.safe(this.http.put(`${API}/api/tickets/${id}/complete`, {}), null);
  }
  // ── DASHBOARD ──────────────────────────────────────────
  getDashboardState() {
    return this.safe(this.http.get(`${API}/api/dashboard/state`), null);
  }
  static {
    this.\u0275fac = function ApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ApiService
};
//# sourceMappingURL=chunk-A4GLKYPK.js.map
