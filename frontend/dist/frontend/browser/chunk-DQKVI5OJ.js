import {
  ApiService
} from "./chunk-A4GLKYPK.js";
import {
  CommonModule,
  Component,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MXKFRPZY.js";

// src/app/components/rooms/rooms.component.ts
var _forTrack0 = ($index, $item) => $item.roomNumber;
function RoomsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275text(2, " Yuklanmoqda...");
    \u0275\u0275elementEnd();
  }
}
function RoomsComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 11)(2, "div", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14)(9, "span");
    \u0275\u0275element(10, "i", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275element(13, "i", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 17);
    \u0275\u0275element(16, "i", 18);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r1.roomNumber);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r1.statusCss(r_r1.status, r_r1.cleaningStatus), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(r_r1.status, r_r1.cleaningStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.style);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", r_r1.floor, "-qavat");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" $", r_r1.bookingPrice, "/tun");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r1.cleaningStatus || "Clean");
  }
}
function RoomsComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Xonalar topilmadi");
    \u0275\u0275elementEnd();
  }
}
function RoomsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, RoomsComponent_Conditional_11_For_2_Template, 19, 9, "div", 9, _forTrack0);
    \u0275\u0275template(3, RoomsComponent_Conditional_11_Conditional_3_Template, 2, 0, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.rooms());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.rooms().length === 0 ? 3 : -1);
  }
}
var RoomsComponent = class _RoomsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.rooms = signal([]);
    this.loading = signal(true);
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.api.getRooms().subscribe((r) => {
      this.rooms.set(r || []);
      this.loading.set(false);
    });
  }
  statusCss(s, c) {
    if (s === "Available" && c === "Clean")
      return "status-available";
    if (s === "Occupied")
      return "status-occupied";
    if (s === "Reserved")
      return "status-reserved";
    if (s === "BeingServiced")
      return "status-cleaning";
    if (s === "NotAvailable")
      return "status-maintenance";
    return "status-pending";
  }
  statusLabel(s, c) {
    if (s === "Available" && c === "Clean")
      return "Bo'sh";
    if (s === "Occupied")
      return "Band";
    if (s === "Reserved")
      return "Bron";
    if (s === "BeingServiced")
      return "Tozalanmoqda";
    if (s === "NotAvailable")
      return "Mavjud emas";
    return s;
  }
  static {
    this.\u0275fac = function RoomsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomsComponent, selectors: [["app-rooms"]], decls: 12, vars: 2, consts: [[1, "page-header"], [1, "page-title"], [1, "bi", "bi-building"], [1, "page-sub"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-arrow-clockwise"], [1, "loading-state"], [1, "rooms-grid"], [1, "bi", "bi-hourglass-split"], [1, "room-tile"], [1, "empty-state"], [1, "room-tile-header"], [1, "room-number"], [1, "room-style"], [1, "room-meta"], [1, "bi", "bi-layers"], [1, "bi", "bi-tag"], [1, "room-clean"], [1, "bi", "bi-stars"]], template: function RoomsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275element(3, "i", 2);
        \u0275\u0275text(4, " Xonalar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "GrandStay \u2014 10 xona, 2 qavat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function RoomsComponent_Template_button_click_7_listener() {
          return ctx.load();
        });
        \u0275\u0275element(8, "i", 5);
        \u0275\u0275text(9, " Yangilash ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, RoomsComponent_Conditional_10_Template, 3, 0, "div", 6)(11, RoomsComponent_Conditional_11_Template, 4, 1, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.loading() ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 11 : -1);
      }
    }, dependencies: [CommonModule], styles: ['@charset "UTF-8";\n\n\n\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  min-height: 100vh;\n  background: var(--bg-secondary);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 100;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 24px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 1;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 1px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  color: var(--text-secondary);\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 500;\n  transition: var(--transition);\n}\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 20px;\n  text-align: center;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--accent-glow);\n  color: var(--accent);\n  border-left: 2px solid var(--accent);\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-top: 1px solid var(--border);\n}\n.connection-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: var(--text-muted);\n  padding: 8px 10px;\n  border-radius: var(--radius-sm);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n}\n.connection-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 220px;\n  padding: 28px;\n  min-height: 100vh;\n  background: var(--bg-primary);\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n  .sidebar-brand[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%], \n   .sidebar-brand[_ngcontent-%COMP%]   .brand-sub[_ngcontent-%COMP%], \n   .nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n   .connection-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sidebar-brand[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 20px 10px;\n  }\n  .nav-item[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 12px;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 60px;\n    padding: 16px;\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 4px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 60px;\n  font-size: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.rooms-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.room-tile[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 20px;\n  transition: var(--transition);\n}\n.room-tile[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-hover);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow);\n}\n.room-tile-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.room-number[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.room-style[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n}\n.room-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-bottom: 8px;\n}\n.room-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.room-clean[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.room-clean[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  color: var(--text-muted);\n  padding: 40px;\n}\n/*# sourceMappingURL=rooms.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomsComponent, [{
    type: Component,
    args: [{ selector: "app-rooms", standalone: true, imports: [CommonModule], template: `<div class="page-header">
  <div>
    <h1 class="page-title"><i class="bi bi-building"></i> Xonalar</h1>
    <p class="page-sub">GrandStay \u2014 10 xona, 2 qavat</p>
  </div>
  <button class="btn btn-outline-secondary btn-sm" (click)="load()">
    <i class="bi bi-arrow-clockwise"></i> Yangilash
  </button>
</div>

@if (loading()) {
  <div class="loading-state"><i class="bi bi-hourglass-split"></i> Yuklanmoqda...</div>
}

@if (!loading()) {
  <div class="rooms-grid">
    @for (r of rooms(); track r.roomNumber) {
      <div class="room-tile">
        <div class="room-tile-header">
          <div class="room-number">{{ r.roomNumber }}</div>
          <span class="badge {{ statusCss(r.status, r.cleaningStatus) }}">
            {{ statusLabel(r.status, r.cleaningStatus) }}
          </span>
        </div>
        <div class="room-style">{{ r.style }}</div>
        <div class="room-meta">
          <span><i class="bi bi-layers"></i> {{ r.floor }}-qavat</span>
          <span><i class="bi bi-tag"></i> \${{ r.bookingPrice }}/tun</span>
        </div>
        <div class="room-clean">
          <i class="bi bi-stars"></i>
          <span>{{ r.cleaningStatus || 'Clean' }}</span>
        </div>
      </div>
    }
    @if (rooms().length === 0) {
      <div class="empty-state">Xonalar topilmadi</div>
    }
  </div>
}
`, styles: ['@charset "UTF-8";\n\n/* src/app/components/rooms/rooms.component.scss */\n.app-layout {\n  display: flex;\n  min-height: 100vh;\n}\n.sidebar {\n  width: 220px;\n  min-height: 100vh;\n  background: var(--bg-secondary);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 100;\n}\n.sidebar-brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 24px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.brand-icon {\n  font-size: 28px;\n  line-height: 1;\n}\n.brand-name {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.brand-sub {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 1px;\n}\n.sidebar-nav {\n  flex: 1;\n  padding: 16px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  color: var(--text-secondary);\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 500;\n  transition: var(--transition);\n}\n.nav-item i {\n  font-size: 16px;\n  width: 20px;\n  text-align: center;\n}\n.nav-item:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.nav-item.active {\n  background: var(--accent-glow);\n  color: var(--accent);\n  border-left: 2px solid var(--accent);\n}\n.sidebar-footer {\n  padding: 16px;\n  border-top: 1px solid var(--border);\n}\n.connection-badge {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: var(--text-muted);\n  padding: 8px 10px;\n  border-radius: var(--radius-sm);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n}\n.connection-badge i {\n  font-size: 8px;\n}\n.main-content {\n  flex: 1;\n  margin-left: 220px;\n  padding: 28px;\n  min-height: 100vh;\n  background: var(--bg-primary);\n}\n@media (max-width: 768px) {\n  .sidebar {\n    width: 60px;\n  }\n  .sidebar-brand .brand-name,\n  .sidebar-brand .brand-sub,\n  .nav-item span,\n  .connection-badge span {\n    display: none;\n  }\n  .sidebar-brand {\n    justify-content: center;\n    padding: 20px 10px;\n  }\n  .nav-item {\n    justify-content: center;\n    padding: 12px;\n  }\n  .main-content {\n    margin-left: 60px;\n    padding: 16px;\n  }\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-title i {\n  color: var(--accent);\n}\n.page-sub {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 4px;\n}\n.loading-state {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 60px;\n  font-size: 16px;\n}\n.loading-state i {\n  margin-right: 8px;\n}\n.rooms-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.room-tile {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 20px;\n  transition: var(--transition);\n}\n.room-tile:hover {\n  border-color: var(--border-hover);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow);\n}\n.room-tile-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.room-number {\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.room-style {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n}\n.room-meta {\n  display: flex;\n  gap: 12px;\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-bottom: 8px;\n}\n.room-meta i {\n  margin-right: 4px;\n}\n.room-clean {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.room-clean i {\n  margin-right: 4px;\n}\n.empty-state {\n  grid-column: 1/-1;\n  text-align: center;\n  color: var(--text-muted);\n  padding: 40px;\n}\n/*# sourceMappingURL=rooms.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomsComponent, { className: "RoomsComponent", filePath: "app/components/rooms/rooms.component.ts", lineNumber: 12 });
})();
export {
  RoomsComponent
};
//# sourceMappingURL=chunk-DQKVI5OJ.js.map
