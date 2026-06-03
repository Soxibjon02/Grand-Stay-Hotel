import {
  RouterLink,
  SignalRService
} from "./chunk-JAGQMNCS.js";
import {
  ApiService
} from "./chunk-A4GLKYPK.js";
import {
  CommonModule,
  Component,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-MXKFRPZY.js";

// src/app/components/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.roomNumber;
var _forTrack1 = ($index, $item) => $item.id;
function DashboardComponent_For_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("room-card ", ctx_r1.roomCss(r_r1.status, r_r1.cleaning), "");
    \u0275\u0275property("title", r_r1.style + " \u2014 $" + r_r1.price + "/tun");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.roomIcon(r_r1.status, r_r1.cleaning));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.roomNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.style);
  }
}
function DashboardComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, "Yuklanmoqda...");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_For_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("room-card ", ctx_r1.roomCss(r_r3.status, r_r3.cleaning), "");
    \u0275\u0275property("title", r_r3.style + " \u2014 $" + r_r3.price + "/tun");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.roomIcon(r_r3.status, r_r3.cleaning));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.roomNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.style);
  }
}
function DashboardComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, "Yuklanmoqda...");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Voqealar kutilmoqda...");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_For_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56)(4, "div", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 59);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ev_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ev_r4.icon || "\u{1F4E1}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ev_r4.eventName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ev_r4.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ev_r4.publisher, " \xB7 ", ctx_r1.fmtTime(ev_r4.occurredAt || ev_r4.timestamp), "");
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.api = inject(ApiService);
    this.signalR = inject(SignalRService);
    this.rooms = signal([]);
    this.events = signal([]);
    this.stats = signal({ availableRooms: 0, activeOrders: 0, openTickets: 0, criticalTickets: 0, completedToday: 0 });
    this.floor1 = computed(() => this.rooms().filter((r) => r.floor === 1));
    this.floor2 = computed(() => this.rooms().filter((r) => r.floor === 2));
    this.effects = [];
    this.effects.push(effect(() => {
      const ev = this.signalR.latestEvent();
      if (!ev)
        return;
      this.events.update((list) => [ev, ...list].slice(0, 50));
    }));
    this.effects.push(effect(() => {
      const d = this.signalR.latestRoom();
      if (!d)
        return;
      const num = d.roomNumber || d.RoomNumber;
      this.rooms.update((list) => list.map((r) => r.roomNumber === num ? __spreadProps(__spreadValues({}, r), { status: d.status || r.status, cleaning: d.cleaning || r.cleaning }) : r));
    }));
    this.effects.push(effect(() => {
      const s = this.signalR.latestStats();
      if (!s)
        return;
      this.stats.set({
        availableRooms: s.availableRooms ?? s.AvailableRooms ?? 0,
        activeOrders: s.activeOrders ?? s.ActiveOrders ?? 0,
        openTickets: s.openTickets ?? s.OpenTickets ?? 0,
        criticalTickets: s.criticalTickets ?? s.CriticalTickets ?? 0,
        completedToday: s.completedToday ?? s.CompletedToday ?? 0
      });
    }));
  }
  ngOnInit() {
    this.api.getDashboardState().subscribe((data) => {
      if (!data)
        return;
      const r = (data.rooms || []).map((r2) => ({
        roomNumber: r2.roomNumber || r2.RoomNumber,
        floor: r2.floor || r2.Floor || 1,
        style: r2.style || r2.Style || "",
        status: r2.status || r2.Status || "Available",
        cleaning: r2.cleaning || r2.Cleaning || "Clean",
        price: r2.price || r2.Price || 0
      }));
      this.rooms.set(r);
      this.events.set((data.events || []).slice(0, 50));
      const s = data.stats || {};
      this.stats.set({
        availableRooms: s.availableRooms ?? s.AvailableRooms ?? 0,
        activeOrders: s.activeOrders ?? s.ActiveOrders ?? 0,
        openTickets: s.openTickets ?? s.OpenTickets ?? 0,
        criticalTickets: s.criticalTickets ?? s.CriticalTickets ?? 0,
        completedToday: s.completedToday ?? s.CompletedToday ?? 0
      });
    });
  }
  ngOnDestroy() {
    this.effects.forEach((e) => e.destroy());
  }
  roomCss(status, cleaning) {
    if (status === "Available" && cleaning === "Clean")
      return "room-available";
    if (status === "Reserved")
      return "room-reserved";
    if (status === "Occupied")
      return "room-occupied";
    if (status === "BeingServiced")
      return "room-cleaning";
    if (status === "NotAvailable")
      return "room-maintenance";
    return "room-other";
  }
  roomIcon(status, cleaning) {
    if (status === "Available" && cleaning === "Clean")
      return "\u2705";
    if (status === "Reserved")
      return "\u{1F4CB}";
    if (status === "Occupied")
      return "\u{1F6CC}";
    if (status === "BeingServiced")
      return "\u{1F9F9}";
    if (status === "NotAvailable")
      return "\u{1F527}";
    return "\u2753";
  }
  fmtTime(d) {
    if (!d)
      return "";
    try {
      return new Date(d).toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    } catch {
      return String(d);
    }
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 109, vars: 9, consts: [[1, "page-header"], [1, "page-title"], [1, "bi", "bi-grid-1x2-fill"], [1, "page-sub"], [1, "stats-grid"], [1, "stat-card", "green"], [1, "stat-icon"], [1, "bi", "bi-door-open"], [1, "stat-info"], [1, "stat-num"], [1, "stat-lbl"], [1, "stat-card", "blue"], [1, "bi", "bi-bag-check"], [1, "stat-card", "red"], [1, "bi", "bi-tools"], [1, "stat-card", "orange"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "stat-card", "purple"], [1, "bi", "bi-check-circle-fill"], [1, "stat-card", "gray"], [1, "bi", "bi-building"], [1, "dashboard-grid"], [1, "card"], [1, "card-header"], [1, "legend"], [1, "l-dot", "green"], [1, "l-dot", "blue"], [1, "l-dot", "red"], [1, "l-dot", "yellow"], [1, "l-dot", "orange"], [1, "card-body"], [1, "floor-label"], [1, "room-grid"], [3, "class", "title"], [1, "empty-rooms"], [1, "floor-label", "mt-3"], [1, "bi", "bi-broadcast"], [1, "badge", "bg-secondary"], [1, "event-feed"], [1, "empty-feed"], [1, "event-item"], [1, "quick-actions"], ["routerLink", "/bookings", 1, "qa-btn", "qa-blue"], [1, "bi", "bi-calendar-plus"], ["routerLink", "/room-service", 1, "qa-btn", "qa-teal"], [1, "bi", "bi-bag-plus"], ["routerLink", "/maintenance", 1, "qa-btn", "qa-red"], [1, "bi", "bi-exclamation-circle"], ["routerLink", "/housekeeping", 1, "qa-btn", "qa-yellow"], [1, "bi", "bi-stars"], [3, "title"], [1, "room-icon"], [1, "room-num"], [1, "room-style"], [1, "bi", "bi-broadcast", "fs-2", "text-muted"], [1, "ev-icon"], [1, "ev-body"], [1, "ev-name"], [1, "ev-msg"], [1, "ev-meta"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275element(2, "i", 2);
        \u0275\u0275text(3, " Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "GrandStay mehmonxonasi \u2014 real-time monitoring");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8)(11, "div", 9);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 10);
        \u0275\u0275text(14, "Bo'sh Xonalar");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 6);
        \u0275\u0275element(17, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 8)(19, "div", 9);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 10);
        \u0275\u0275text(22, "Faol Buyurtmalar");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 13)(24, "div", 6);
        \u0275\u0275element(25, "i", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 8)(27, "div", 9);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 10);
        \u0275\u0275text(30, "Ochiq Muammolar");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 15)(32, "div", 6);
        \u0275\u0275element(33, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 8)(35, "div", 9);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 10);
        \u0275\u0275text(38, "Critical");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 17)(40, "div", 6);
        \u0275\u0275element(41, "i", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 8)(43, "div", 9);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 10);
        \u0275\u0275text(46, "Bugun Bajarildi");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 19)(48, "div", 6);
        \u0275\u0275element(49, "i", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 8)(51, "div", 9);
        \u0275\u0275text(52, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 10);
        \u0275\u0275text(54, "Jami Xonalar");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(55, "div", 21)(56, "div", 22)(57, "div", 23)(58, "span");
        \u0275\u0275element(59, "i", 20);
        \u0275\u0275text(60, " Xonalar Holati (Real-Time)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 24);
        \u0275\u0275element(62, "span", 25);
        \u0275\u0275text(63, " Bo'sh ");
        \u0275\u0275element(64, "span", 26);
        \u0275\u0275text(65, " Band ");
        \u0275\u0275element(66, "span", 27);
        \u0275\u0275text(67, " Joylashgan ");
        \u0275\u0275element(68, "span", 28);
        \u0275\u0275text(69, " Tozalanmoqda ");
        \u0275\u0275element(70, "span", 29);
        \u0275\u0275text(71, " Ta'mirlash ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 30)(73, "div", 31);
        \u0275\u0275text(74, "\u{1F53C} 2-Qavat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 32);
        \u0275\u0275repeaterCreate(76, DashboardComponent_For_77_Template, 7, 7, "div", 33, _forTrack0);
        \u0275\u0275template(78, DashboardComponent_Conditional_78_Template, 2, 0, "div", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 35);
        \u0275\u0275text(80, "\u{1F53D} 1-Qavat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 32);
        \u0275\u0275repeaterCreate(82, DashboardComponent_For_83_Template, 7, 7, "div", 33, _forTrack0);
        \u0275\u0275template(84, DashboardComponent_Conditional_84_Template, 2, 0, "div", 34);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(85, "div", 22)(86, "div", 23)(87, "span");
        \u0275\u0275element(88, "i", 36);
        \u0275\u0275text(89, " Live Voqealar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "span", 37);
        \u0275\u0275text(91);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "div", 38);
        \u0275\u0275template(93, DashboardComponent_Conditional_93_Template, 4, 0, "div", 39);
        \u0275\u0275repeaterCreate(94, DashboardComponent_For_95_Template, 10, 5, "div", 40, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(96, "div", 41)(97, "a", 42);
        \u0275\u0275element(98, "i", 43);
        \u0275\u0275text(99, " Yangi Bron");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "a", 44);
        \u0275\u0275element(101, "i", 45);
        \u0275\u0275text(102, " Xona Xizmati");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "a", 46);
        \u0275\u0275element(104, "i", 47);
        \u0275\u0275text(105, " Muammo Bildirish");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "a", 48);
        \u0275\u0275element(107, "i", 49);
        \u0275\u0275text(108, " Tozalash");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.stats().availableRooms);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.stats().activeOrders);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.stats().openTickets);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.stats().criticalTickets);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.stats().completedToday);
        \u0275\u0275advance(32);
        \u0275\u0275repeater(ctx.floor2());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.floor2().length === 0 ? 78 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.floor1());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.floor1().length === 0 ? 84 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.events().length);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.events().length === 0 ? 93 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.events());
      }
    }, dependencies: [CommonModule, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 4px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1200px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  transition: var(--transition);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow);\n}\n.stat-card.green[_ngcontent-%COMP%] {\n  border-color: rgba(34, 197, 94, 0.3);\n}\n.stat-card.green[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: var(--success);\n}\n.stat-card.blue[_ngcontent-%COMP%] {\n  border-color: rgba(124, 111, 255, 0.3);\n}\n.stat-card.blue[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--accent-glow);\n  color: var(--accent);\n}\n.stat-card.red[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.stat-card.red[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: var(--danger);\n}\n.stat-card.orange[_ngcontent-%COMP%] {\n  border-color: rgba(249, 115, 22, 0.3);\n}\n.stat-card.orange[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.12);\n  color: #f97316;\n}\n.stat-card.purple[_ngcontent-%COMP%] {\n  border-color: rgba(168, 85, 247, 0.3);\n}\n.stat-card.purple[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.12);\n  color: #a855f7;\n}\n.stat-card.gray[_ngcontent-%COMP%] {\n  border-color: var(--border);\n}\n.stat-card.gray[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.stat-num[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 3px;\n  font-weight: 500;\n}\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1024px) {\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.floor-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 12px;\n}\n.room-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 10px;\n}\n.empty-rooms[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  color: var(--text-muted);\n  padding: 20px;\n}\n.room-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-md);\n  padding: 14px 8px;\n  text-align: center;\n  transition: var(--transition);\n  cursor: default;\n  border: 1px solid;\n}\n.room-card.room-available[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.08);\n  border-color: rgba(34, 197, 94, 0.3);\n}\n.room-card.room-available[_ngcontent-%COMP%]   .room-num[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.room-card.room-reserved[_ngcontent-%COMP%] {\n  background: rgba(124, 111, 255, 0.08);\n  border-color: rgba(124, 111, 255, 0.3);\n}\n.room-card.room-reserved[_ngcontent-%COMP%]   .room-num[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.room-card.room-occupied[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.room-card.room-occupied[_ngcontent-%COMP%]   .room-num[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.room-card.room-cleaning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.08);\n  border-color: rgba(245, 158, 11, 0.3);\n}\n.room-card.room-cleaning[_ngcontent-%COMP%]   .room-num[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.room-card.room-maintenance[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.08);\n  border-color: rgba(249, 115, 22, 0.3);\n}\n.room-card.room-maintenance[_ngcontent-%COMP%]   .room-num[_ngcontent-%COMP%] {\n  color: #f97316;\n}\n.room-card.room-other[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  border-color: var(--border);\n}\n.room-card.room-other[_ngcontent-%COMP%]   .room-num[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.room-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.04);\n}\n.room-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 1;\n  margin-bottom: 6px;\n}\n.room-num[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n}\n.room-style[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.event-feed[_ngcontent-%COMP%] {\n  max-height: 380px;\n  overflow-y: auto;\n  padding: 12px;\n}\n.empty-feed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 40px;\n  color: var(--text-muted);\n  text-align: center;\n}\n.empty-feed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.event-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 10px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 4px;\n  background: var(--bg-secondary);\n  border: 1px solid var(--border);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ev-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.ev-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--accent);\n}\n.ev-msg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-primary);\n}\n.ev-meta[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.l-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 3px;\n}\n.l-dot.green[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.l-dot.blue[_ngcontent-%COMP%] {\n  background: var(--accent);\n}\n.l-dot.red[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.l-dot.yellow[_ngcontent-%COMP%] {\n  background: var(--warning);\n}\n.l-dot.orange[_ngcontent-%COMP%] {\n  background: #f97316;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.qa-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-radius: var(--radius-md);\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: var(--transition);\n  border: 1px solid var(--border);\n}\n.qa-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.qa-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow);\n}\n.qa-btn.qa-blue[_ngcontent-%COMP%] {\n  background: rgba(124, 111, 255, 0.12);\n  color: var(--accent);\n  border-color: rgba(124, 111, 255, 0.3);\n}\n.qa-btn.qa-teal[_ngcontent-%COMP%] {\n  background: rgba(56, 189, 248, 0.12);\n  color: var(--info);\n  border-color: rgba(56, 189, 248, 0.3);\n}\n.qa-btn.qa-red[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: var(--danger);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.qa-btn.qa-yellow[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: var(--warning);\n  border-color: rgba(245, 158, 11, 0.3);\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="page-header">
  <h1 class="page-title"><i class="bi bi-grid-1x2-fill"></i> Dashboard</h1>
  <p class="page-sub">GrandStay mehmonxonasi \u2014 real-time monitoring</p>
</div>

<!-- \u2500\u2500 STAT CARDS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div class="stats-grid">
  <div class="stat-card green">
    <div class="stat-icon"><i class="bi bi-door-open"></i></div>
    <div class="stat-info">
      <div class="stat-num">{{ stats().availableRooms }}</div>
      <div class="stat-lbl">Bo'sh Xonalar</div>
    </div>
  </div>
  <div class="stat-card blue">
    <div class="stat-icon"><i class="bi bi-bag-check"></i></div>
    <div class="stat-info">
      <div class="stat-num">{{ stats().activeOrders }}</div>
      <div class="stat-lbl">Faol Buyurtmalar</div>
    </div>
  </div>
  <div class="stat-card red">
    <div class="stat-icon"><i class="bi bi-tools"></i></div>
    <div class="stat-info">
      <div class="stat-num">{{ stats().openTickets }}</div>
      <div class="stat-lbl">Ochiq Muammolar</div>
    </div>
  </div>
  <div class="stat-card orange">
    <div class="stat-icon"><i class="bi bi-exclamation-triangle-fill"></i></div>
    <div class="stat-info">
      <div class="stat-num">{{ stats().criticalTickets }}</div>
      <div class="stat-lbl">Critical</div>
    </div>
  </div>
  <div class="stat-card purple">
    <div class="stat-icon"><i class="bi bi-check-circle-fill"></i></div>
    <div class="stat-info">
      <div class="stat-num">{{ stats().completedToday }}</div>
      <div class="stat-lbl">Bugun Bajarildi</div>
    </div>
  </div>
  <div class="stat-card gray">
    <div class="stat-icon"><i class="bi bi-building"></i></div>
    <div class="stat-info">
      <div class="stat-num">10</div>
      <div class="stat-lbl">Jami Xonalar</div>
    </div>
  </div>
</div>

<!-- \u2500\u2500 ROOM GRID + EVENT FEED \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div class="dashboard-grid">

  <!-- Room Grid -->
  <div class="card">
    <div class="card-header">
      <span><i class="bi bi-building"></i> Xonalar Holati (Real-Time)</span>
      <div class="legend">
        <span class="l-dot green"></span> Bo'sh
        <span class="l-dot blue"></span> Band
        <span class="l-dot red"></span> Joylashgan
        <span class="l-dot yellow"></span> Tozalanmoqda
        <span class="l-dot orange"></span> Ta'mirlash
      </div>
    </div>
    <div class="card-body">
      <div class="floor-label">\u{1F53C} 2-Qavat</div>
      <div class="room-grid">
        @for (r of floor2(); track r.roomNumber) {
          <div class="room-card {{ roomCss(r.status, r.cleaning) }}" [title]="r.style + ' \u2014 $' + r.price + '/tun'">
            <div class="room-icon">{{ roomIcon(r.status, r.cleaning) }}</div>
            <div class="room-num">{{ r.roomNumber }}</div>
            <div class="room-style">{{ r.style }}</div>
          </div>
        }
        @if (floor2().length === 0) {
          <div class="empty-rooms">Yuklanmoqda...</div>
        }
      </div>

      <div class="floor-label mt-3">\u{1F53D} 1-Qavat</div>
      <div class="room-grid">
        @for (r of floor1(); track r.roomNumber) {
          <div class="room-card {{ roomCss(r.status, r.cleaning) }}" [title]="r.style + ' \u2014 $' + r.price + '/tun'">
            <div class="room-icon">{{ roomIcon(r.status, r.cleaning) }}</div>
            <div class="room-num">{{ r.roomNumber }}</div>
            <div class="room-style">{{ r.style }}</div>
          </div>
        }
        @if (floor1().length === 0) {
          <div class="empty-rooms">Yuklanmoqda...</div>
        }
      </div>
    </div>
  </div>

  <!-- Live Event Feed -->
  <div class="card">
    <div class="card-header">
      <span><i class="bi bi-broadcast"></i> Live Voqealar</span>
      <span class="badge bg-secondary">{{ events().length }}</span>
    </div>
    <div class="event-feed">
      @if (events().length === 0) {
        <div class="empty-feed">
          <i class="bi bi-broadcast fs-2 text-muted"></i>
          <p>Voqealar kutilmoqda...</p>
        </div>
      }
      @for (ev of events(); track ev.id) {
        <div class="event-item">
          <div class="ev-icon">{{ ev.icon || '\u{1F4E1}' }}</div>
          <div class="ev-body">
            <div class="ev-name">{{ ev.eventName }}</div>
            <div class="ev-msg">{{ ev.message }}</div>
            <div class="ev-meta">{{ ev.publisher }} \xB7 {{ fmtTime(ev.occurredAt || ev.timestamp) }}</div>
          </div>
        </div>
      }
    </div>
  </div>

</div>

<!-- \u2500\u2500 QUICK ACTIONS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div class="quick-actions">
  <a routerLink="/bookings"     class="qa-btn qa-blue"><i class="bi bi-calendar-plus"></i> Yangi Bron</a>
  <a routerLink="/room-service" class="qa-btn qa-teal"><i class="bi bi-bag-plus"></i> Xona Xizmati</a>
  <a routerLink="/maintenance"  class="qa-btn qa-red"><i class="bi bi-exclamation-circle"></i> Muammo Bildirish</a>
  <a routerLink="/housekeeping" class="qa-btn qa-yellow"><i class="bi bi-stars"></i> Tozalash</a>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/components/dashboard/dashboard.component.scss */\n.page-header {\n  margin-bottom: 28px;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-title i {\n  color: var(--accent);\n}\n.page-sub {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 4px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1200px) {\n  .stats-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border);\n  background: var(--bg-card);\n  transition: var(--transition);\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow);\n}\n.stat-card.green {\n  border-color: rgba(34, 197, 94, 0.3);\n}\n.stat-card.green .stat-icon {\n  background: rgba(34, 197, 94, 0.12);\n  color: var(--success);\n}\n.stat-card.blue {\n  border-color: rgba(124, 111, 255, 0.3);\n}\n.stat-card.blue .stat-icon {\n  background: var(--accent-glow);\n  color: var(--accent);\n}\n.stat-card.red {\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.stat-card.red .stat-icon {\n  background: rgba(239, 68, 68, 0.12);\n  color: var(--danger);\n}\n.stat-card.orange {\n  border-color: rgba(249, 115, 22, 0.3);\n}\n.stat-card.orange .stat-icon {\n  background: rgba(249, 115, 22, 0.12);\n  color: #f97316;\n}\n.stat-card.purple {\n  border-color: rgba(168, 85, 247, 0.3);\n}\n.stat-card.purple .stat-icon {\n  background: rgba(168, 85, 247, 0.12);\n  color: #a855f7;\n}\n.stat-card.gray {\n  border-color: var(--border);\n}\n.stat-card.gray .stat-icon {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.stat-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.stat-num {\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1;\n}\n.stat-lbl {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 3px;\n  font-weight: 500;\n}\n.dashboard-grid {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1024px) {\n  .dashboard-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.floor-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 12px;\n}\n.room-grid {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 10px;\n}\n.empty-rooms {\n  grid-column: 1/-1;\n  text-align: center;\n  color: var(--text-muted);\n  padding: 20px;\n}\n.room-card {\n  border-radius: var(--radius-md);\n  padding: 14px 8px;\n  text-align: center;\n  transition: var(--transition);\n  cursor: default;\n  border: 1px solid;\n}\n.room-card.room-available {\n  background: rgba(34, 197, 94, 0.08);\n  border-color: rgba(34, 197, 94, 0.3);\n}\n.room-card.room-available .room-num {\n  color: var(--success);\n}\n.room-card.room-reserved {\n  background: rgba(124, 111, 255, 0.08);\n  border-color: rgba(124, 111, 255, 0.3);\n}\n.room-card.room-reserved .room-num {\n  color: var(--accent);\n}\n.room-card.room-occupied {\n  background: rgba(239, 68, 68, 0.08);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.room-card.room-occupied .room-num {\n  color: var(--danger);\n}\n.room-card.room-cleaning {\n  background: rgba(245, 158, 11, 0.08);\n  border-color: rgba(245, 158, 11, 0.3);\n}\n.room-card.room-cleaning .room-num {\n  color: var(--warning);\n}\n.room-card.room-maintenance {\n  background: rgba(249, 115, 22, 0.08);\n  border-color: rgba(249, 115, 22, 0.3);\n}\n.room-card.room-maintenance .room-num {\n  color: #f97316;\n}\n.room-card.room-other {\n  background: var(--bg-hover);\n  border-color: var(--border);\n}\n.room-card.room-other .room-num {\n  color: var(--text-muted);\n}\n.room-card:hover {\n  transform: scale(1.04);\n}\n.room-icon {\n  font-size: 22px;\n  line-height: 1;\n  margin-bottom: 6px;\n}\n.room-num {\n  font-size: 15px;\n  font-weight: 700;\n}\n.room-style {\n  font-size: 9px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.event-feed {\n  max-height: 380px;\n  overflow-y: auto;\n  padding: 12px;\n}\n.empty-feed {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 40px;\n  color: var(--text-muted);\n  text-align: center;\n}\n.empty-feed p {\n  font-size: 12px;\n}\n.event-item {\n  display: flex;\n  gap: 10px;\n  padding: 10px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 4px;\n  background: var(--bg-secondary);\n  border: 1px solid var(--border);\n  animation: fadeIn 0.3s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ev-icon {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.ev-name {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--accent);\n}\n.ev-msg {\n  font-size: 12px;\n  color: var(--text-primary);\n}\n.ev-meta {\n  font-size: 10px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.legend {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.l-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 3px;\n}\n.l-dot.green {\n  background: var(--success);\n}\n.l-dot.blue {\n  background: var(--accent);\n}\n.l-dot.red {\n  background: var(--danger);\n}\n.l-dot.yellow {\n  background: var(--warning);\n}\n.l-dot.orange {\n  background: #f97316;\n}\n.quick-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.qa-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-radius: var(--radius-md);\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: var(--transition);\n  border: 1px solid var(--border);\n}\n.qa-btn i {\n  font-size: 16px;\n}\n.qa-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow);\n}\n.qa-btn.qa-blue {\n  background: rgba(124, 111, 255, 0.12);\n  color: var(--accent);\n  border-color: rgba(124, 111, 255, 0.3);\n}\n.qa-btn.qa-teal {\n  background: rgba(56, 189, 248, 0.12);\n  color: var(--info);\n  border-color: rgba(56, 189, 248, 0.3);\n}\n.qa-btn.qa-red {\n  background: rgba(239, 68, 68, 0.12);\n  color: var(--danger);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.qa-btn.qa-yellow {\n  background: rgba(245, 158, 11, 0.12);\n  color: var(--warning);\n  border-color: rgba(245, 158, 11, 0.3);\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app/components/dashboard/dashboard.component.ts", lineNumber: 19 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-MACEJYXL.js.map
