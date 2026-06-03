import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-2PIQRKKB.js";
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
  ɵɵclassMapInterpolate2,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MXKFRPZY.js";

// src/app/components/room-service/room-service.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function RoomServiceComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("alert alert-", ctx_r0.msgType(), " mb-4");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.msg());
  }
}
function RoomServiceComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function RoomServiceComponent_For_31_Template_button_click_0_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.form.priority = p_r3.value);
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.form.priority === p_r3.value);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("bi ", p_r3.icon, " ", p_r3.cls, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3.label, " ");
  }
}
function RoomServiceComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2, " Yuklanmoqda...");
    \u0275\u0275elementEnd();
  }
}
function RoomServiceComponent_Conditional_53_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", o_r4.guestName, "");
  }
}
function RoomServiceComponent_Conditional_53_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function RoomServiceComponent_Conditional_53_For_2_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const o_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nextStatus(o_r4.id));
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("btn-info", o_r4.status === "Received")("btn-warning", o_r4.status === "Preparing")("btn-success", o_r4.status === "Delivering");
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-play-fill", o_r4.status === "Received")("bi-truck", o_r4.status === "Preparing")("bi-check-lg", o_r4.status === "Delivering");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.nextActionLabel(o_r4.status), " ");
  }
}
function RoomServiceComponent_Conditional_53_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "span");
    \u0275\u0275element(6, "i");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275element(9, "i");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 38)(14, "span");
    \u0275\u0275element(15, "i", 39);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, RoomServiceComponent_Conditional_53_For_2_Conditional_17_Template, 3, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, RoomServiceComponent_Conditional_53_For_2_Conditional_18_Template, 3, 13, "button", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("done", o_r4.status === "Delivered")("inprogress", ctx_r0.isInProgress(o_r4.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F6AA} Xona ", o_r4.roomNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge priority-badge priority-", o_r4.priority, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("bi ", ctx_r0.priorityInfo(o_r4.priority).icon, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.priorityInfo(o_r4.priority).label, " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r0.statusCss(o_r4.status), "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("bi ", ctx_r0.statusIcon(o_r4.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(o_r4.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r4.items);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.fmtDate(o_r4.createdAt), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r4.guestName && o_r4.guestName !== "Mehmon" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nextActionLabel(o_r4.status) ? 18 : -1);
  }
}
function RoomServiceComponent_Conditional_53_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Hozircha buyurtmalar yo'q");
    \u0275\u0275elementEnd()();
  }
}
function RoomServiceComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275repeaterCreate(1, RoomServiceComponent_Conditional_53_For_2_Template, 19, 23, "div", 31, _forTrack1);
    \u0275\u0275template(3, RoomServiceComponent_Conditional_53_Conditional_3_Template, 4, 0, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.orders());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.orders().length === 0 ? 3 : -1);
  }
}
var RoomServiceComponent = class _RoomServiceComponent {
  constructor() {
    this.api = inject(ApiService);
    this.orders = signal([]);
    this.loading = signal(true);
    this.msg = signal("");
    this.msgType = signal("success");
    this.form = { roomNumber: "", description: "", priority: 0 };
    this.priorities = [
      { value: 0, label: "Oddiy", icon: "bi-circle", cls: "text-secondary" },
      { value: 1, label: "O'rta", icon: "bi-dash-circle", cls: "text-warning" },
      { value: 2, label: "Shoshilinch", icon: "bi-exclamation-circle", cls: "text-danger" },
      { value: 3, label: "Kritik", icon: "bi-exclamation-triangle-fill", cls: "text-danger" }
    ];
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.api.getOrders().subscribe((o) => {
      this.orders.set(o || []);
      this.loading.set(false);
    });
  }
  submit() {
    if (!this.form.roomNumber.trim() || !this.form.description.trim()) {
      this.show("\u274C Xona raqami va tavsif majburiy", "danger");
      return;
    }
    const body = {
      roomNumber: this.form.roomNumber,
      items: this.form.description,
      totalAmount: 0
    };
    this.api.createOrder(body).subscribe((r) => {
      if (r) {
        this.show(`\u2705 Buyurtma qabul qilindi \u2014 Xona ${this.form.roomNumber}`, "success");
        this.form = { roomNumber: "", description: "", priority: 0 };
        this.load();
      } else {
        this.show("\u274C Xato yuz berdi", "danger");
      }
    });
  }
  nextStatus(id) {
    this.api.nextOrderStatus(id).subscribe((r) => {
      if (r) {
        this.show(`\u2705 Status yangilandi`, "success");
        this.load();
      } else
        this.show("\u274C Xato", "danger");
    });
  }
  show(m, t) {
    this.msg.set(m);
    this.msgType.set(t);
    setTimeout(() => this.msg.set(""), 4e3);
  }
  // OrderStatus: Received, Preparing, Delivering, Delivered, Canceled
  statusCss(s) {
    if (s === "Delivered")
      return "status-done";
    if (s === "Preparing" || s === "Delivering")
      return "status-inprogress";
    if (s === "Canceled")
      return "status-danger";
    return "status-pending";
  }
  statusLabel(s) {
    const map = {
      Received: "Qabul qilindi",
      Preparing: "Tayyorlanmoqda",
      Delivering: "Yetkazilmoqda",
      Delivered: "Yetkazildi",
      Canceled: "Bekor"
    };
    return map[s] ?? s;
  }
  statusIcon(s) {
    if (s === "Delivered")
      return "bi-check-circle-fill";
    if (s === "Preparing" || s === "Delivering")
      return "bi-play-circle-fill";
    return "bi-clock";
  }
  priorityInfo(p) {
    return this.priorities.find((x) => x.value === p) ?? this.priorities[0];
  }
  nextActionLabel(s) {
    if (s === "Received")
      return "Tayyorlash";
    if (s === "Preparing")
      return "Yetkazmoqda";
    if (s === "Delivering")
      return "Yetkazildi";
    return null;
  }
  isInProgress(s) {
    return s === "Preparing" || s === "Delivering";
  }
  countByStatus(s) {
    return this.orders().filter((o) => o.status === s).length;
  }
  fmtDate(d) {
    if (!d)
      return "\u2014";
    try {
      return new Date(d).toLocaleString("uz-UZ", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
    } catch {
      return d;
    }
  }
  static {
    this.\u0275fac = function RoomServiceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomServiceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomServiceComponent, selectors: [["app-room-service"]], decls: 54, vars: 8, consts: [[1, "page-header"], [1, "page-title"], [1, "bi", "bi-bell-fill"], [1, "page-sub"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-arrow-clockwise"], [3, "class"], [1, "layout-grid"], [1, "card"], [1, "card-header"], [1, "bi", "bi-plus-circle", "text-accent"], [1, "card-body"], [1, "mb-3"], [1, "form-label"], ["placeholder", "Masalan: 101", "maxlength", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Masalan: 2 ta qo'shimcha yostiq, suv va hokazo...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-4"], [1, "priority-pills"], [1, "priority-pill", 3, "active"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "bi", "bi-send"], [1, "mini-stats", "mt-3"], [1, "mini-stat"], [1, "mini-num", "text-warning"], [1, "mini-lbl"], [1, "mini-num", "text-info"], [1, "mini-num", "text-success"], [1, "loading-state"], [1, "orders-list"], [1, "priority-pill", 3, "click"], [1, "bi", "bi-hourglass-split"], [1, "order-card", 3, "done", "inprogress"], [1, "empty-state"], [1, "order-card"], [1, "order-top"], [1, "order-room"], [1, "order-badges"], [1, "order-desc"], [1, "order-meta"], [1, "bi", "bi-clock"], [1, "btn", "btn-sm", "mt-2", 3, "btn-info", "btn-warning", "btn-success"], [1, "bi", "bi-person"], [1, "btn", "btn-sm", "mt-2", 3, "click"], [1, "bi"], [1, "bi", "bi-bell-slash", "fs-1", "text-muted"]], template: function RoomServiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275element(3, "i", 2);
        \u0275\u0275text(4, " Xona Xizmati");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Mehmonlar buyurtmalari va so'rovlari");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function RoomServiceComponent_Template_button_click_7_listener() {
          return ctx.load();
        });
        \u0275\u0275element(8, "i", 5);
        \u0275\u0275text(9, " Yangilash ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, RoomServiceComponent_Conditional_10_Template, 2, 4, "div", 6);
        \u0275\u0275elementStart(11, "div", 7)(12, "div")(13, "div", 8)(14, "div", 9);
        \u0275\u0275element(15, "i", 10);
        \u0275\u0275text(16, " Yangi Buyurtma");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "label", 13);
        \u0275\u0275text(20, "Xona Raqami *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function RoomServiceComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.roomNumber, $event) || (ctx.form.roomNumber = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 12)(23, "label", 13);
        \u0275\u0275text(24, "Buyurtma Tavsifi *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "textarea", 15);
        \u0275\u0275twoWayListener("ngModelChange", function RoomServiceComponent_Template_textarea_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.description, $event) || (ctx.form.description = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 16)(27, "label", 13);
        \u0275\u0275text(28, "Muhimlik Darajasi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 17);
        \u0275\u0275repeaterCreate(30, RoomServiceComponent_For_31_Template, 3, 7, "button", 18, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "button", 19);
        \u0275\u0275listener("click", function RoomServiceComponent_Template_button_click_32_listener() {
          return ctx.submit();
        });
        \u0275\u0275element(33, "i", 20);
        \u0275\u0275text(34, " Buyurtma Yuborish ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 21)(36, "div", 22)(37, "span", 23);
        \u0275\u0275text(38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 24);
        \u0275\u0275text(40, "Jami");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 22)(42, "span", 25);
        \u0275\u0275text(43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span", 24);
        \u0275\u0275text(45, "Jarayonda");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 22)(47, "span", 26);
        \u0275\u0275text(48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 24);
        \u0275\u0275text(50, "Yetkazildi");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "div");
        \u0275\u0275template(52, RoomServiceComponent_Conditional_52_Template, 3, 0, "div", 27)(53, RoomServiceComponent_Conditional_53_Template, 4, 1, "div", 28);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.msg() ? 10 : -1);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.roomNumber);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.description);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.priorities);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.orders().length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.countByStatus("Preparing") + ctx.countByStatus("Delivering"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.countByStatus("Delivered"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 52 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 53 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 4px;\n}\n.layout-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .layout-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.priority-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.priority-pill[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  cursor: pointer;\n  border: 1px solid var(--border);\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  transition: var(--transition);\n}\n.priority-pill.active[_ngcontent-%COMP%] {\n  border-color: var(--accent);\n  background: var(--accent-glow);\n  color: var(--accent);\n}\n.priority-pill[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-hover);\n}\n.mini-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.mini-stat[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  padding: 12px;\n  text-align: center;\n}\n.mini-num[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 22px;\n  font-weight: 700;\n}\n.mini-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.orders-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.order-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 16px;\n  transition: var(--transition);\n}\n.order-card.done[_ngcontent-%COMP%] {\n  border-color: rgba(34, 197, 94, 0.3);\n}\n.order-card.inprogress[_ngcontent-%COMP%] {\n  border-color: rgba(56, 189, 248, 0.3);\n}\n.order-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-hover);\n}\n.order-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.order-room[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.order-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.order-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n  line-height: 1.5;\n}\n.order-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.order-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n.priority-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.priority-0[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.2);\n  color: #94a3b8;\n}\n.priority-1[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.priority-2[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.priority-3[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.25);\n  color: #f87171;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n.status-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n  border: none;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 60px;\n}\n.loading-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=room-service.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomServiceComponent, [{
    type: Component,
    args: [{ selector: "app-room-service", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-header">
  <div>
    <h1 class="page-title"><i class="bi bi-bell-fill"></i> Xona Xizmati</h1>
    <p class="page-sub">Mehmonlar buyurtmalari va so'rovlari</p>
  </div>
  <button class="btn btn-outline-secondary btn-sm" (click)="load()">
    <i class="bi bi-arrow-clockwise"></i> Yangilash
  </button>
</div>

@if (msg()) {
  <div class="alert alert-{{ msgType() }} mb-4">{{ msg() }}</div>
}

<div class="layout-grid">
  <!-- LEFT \u2014 order form -->
  <div>
    <div class="card">
      <div class="card-header"><i class="bi bi-plus-circle text-accent"></i> Yangi Buyurtma</div>
      <div class="card-body">
        <div class="mb-3">
          <label class="form-label">Xona Raqami *</label>
          <input [(ngModel)]="form.roomNumber" class="form-control" placeholder="Masalan: 101" maxlength="3"/>
        </div>
        <div class="mb-3">
          <label class="form-label">Buyurtma Tavsifi *</label>
          <textarea [(ngModel)]="form.description" class="form-control" rows="3"
                    placeholder="Masalan: 2 ta qo'shimcha yostiq, suv va hokazo..."></textarea>
        </div>
        <div class="mb-4">
          <label class="form-label">Muhimlik Darajasi</label>
          <div class="priority-pills">
            @for (p of priorities; track p.value) {
              <button class="priority-pill" [class.active]="form.priority === p.value"
                      (click)="form.priority = p.value">
                <i class="bi {{ p.icon }} {{ p.cls }}"></i> {{ p.label }}
              </button>
            }
          </div>
        </div>
        <button class="btn btn-primary w-100" (click)="submit()">
          <i class="bi bi-send"></i> Buyurtma Yuborish
        </button>
      </div>
    </div>

    <!-- quick stats -->
    <div class="mini-stats mt-3">
      <div class="mini-stat">
        <span class="mini-num text-warning">{{ orders().length }}</span>
        <span class="mini-lbl">Jami</span>
      </div>
      <div class="mini-stat">
        <span class="mini-num text-info">{{ countByStatus('Preparing') + countByStatus('Delivering') }}</span>
        <span class="mini-lbl">Jarayonda</span>
      </div>
      <div class="mini-stat">
        <span class="mini-num text-success">{{ countByStatus('Delivered') }}</span>
        <span class="mini-lbl">Yetkazildi</span>
      </div>
    </div>
  </div>

  <!-- RIGHT \u2014 orders list -->
  <div>
    @if (loading()) {
      <div class="loading-state"><i class="bi bi-hourglass-split"></i> Yuklanmoqda...</div>
    }
    @if (!loading()) {
      <div class="orders-list">
        @for (o of orders(); track o.id) {
          <div class="order-card" [class.done]="o.status==='Delivered'" [class.inprogress]="isInProgress(o.status)">
            <div class="order-top">
              <div class="order-room">\u{1F6AA} Xona {{ o.roomNumber }}</div>
              <div class="order-badges">
                <span class="badge priority-badge priority-{{ o.priority }}">
                  <i class="bi {{ priorityInfo(o.priority).icon }}"></i>
                  {{ priorityInfo(o.priority).label }}
                </span>
                <span class="badge {{ statusCss(o.status) }}">
                  <i class="bi {{ statusIcon(o.status) }}"></i>
                  {{ statusLabel(o.status) }}
                </span>
              </div>
            </div>
            <div class="order-desc">{{ o.items }}</div>
            <div class="order-meta">
              <span><i class="bi bi-clock"></i> {{ fmtDate(o.createdAt) }}</span>
              @if (o.guestName && o.guestName !== 'Mehmon') {
                <span><i class="bi bi-person"></i> {{ o.guestName }}</span>
              }
            </div>
            @if (nextActionLabel(o.status)) {
              <button class="btn btn-sm mt-2"
                      [class.btn-info]="o.status==='Received'"
                      [class.btn-warning]="o.status==='Preparing'"
                      [class.btn-success]="o.status==='Delivering'"
                      (click)="nextStatus(o.id)">
                <i class="bi"
                   [class.bi-play-fill]="o.status==='Received'"
                   [class.bi-truck]="o.status==='Preparing'"
                   [class.bi-check-lg]="o.status==='Delivering'"></i>
                {{ nextActionLabel(o.status) }}
              </button>
            }
          </div>
        }
        @if (orders().length === 0) {
          <div class="empty-state">
            <i class="bi bi-bell-slash fs-1 text-muted"></i>
            <p>Hozircha buyurtmalar yo'q</p>
          </div>
        }
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/components/room-service/room-service.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-title i {\n  color: var(--accent);\n}\n.page-sub {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 4px;\n}\n.layout-grid {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .layout-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.priority-pills {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.priority-pill {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  cursor: pointer;\n  border: 1px solid var(--border);\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  transition: var(--transition);\n}\n.priority-pill.active {\n  border-color: var(--accent);\n  background: var(--accent-glow);\n  color: var(--accent);\n}\n.priority-pill:hover {\n  border-color: var(--border-hover);\n}\n.mini-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.mini-stat {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  padding: 12px;\n  text-align: center;\n}\n.mini-num {\n  display: block;\n  font-size: 22px;\n  font-weight: 700;\n}\n.mini-lbl {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.orders-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.order-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 16px;\n  transition: var(--transition);\n}\n.order-card.done {\n  border-color: rgba(34, 197, 94, 0.3);\n}\n.order-card.inprogress {\n  border-color: rgba(56, 189, 248, 0.3);\n}\n.order-card:hover {\n  border-color: var(--border-hover);\n}\n.order-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.order-room {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.order-badges {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.order-desc {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n  line-height: 1.5;\n}\n.order-meta {\n  display: flex;\n  gap: 12px;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.order-meta i {\n  margin-right: 3px;\n}\n.priority-badge {\n  font-size: 10px;\n}\n.priority-0 {\n  background: rgba(100, 116, 139, 0.2);\n  color: #94a3b8;\n}\n.priority-1 {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.priority-2 {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.priority-3 {\n  background: rgba(239, 68, 68, 0.25);\n  color: #f87171;\n  animation: pulse 1.5s infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n.status-danger {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n  border: none;\n}\n.loading-state,\n.empty-state {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 60px;\n}\n.loading-state i,\n.empty-state i {\n  margin-right: 8px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.empty-state p {\n  font-size: 14px;\n}\n/*# sourceMappingURL=room-service.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomServiceComponent, { className: "RoomServiceComponent", filePath: "app/components/room-service/room-service.component.ts", lineNumber: 19 });
})();
export {
  RoomServiceComponent
};
//# sourceMappingURL=chunk-XK6VDMZW.js.map
