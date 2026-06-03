import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
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

// src/app/components/bookings/bookings.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function BookingsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("alert alert-", ctx_r0.ciType(), " mb-3");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.ciMsg());
  }
}
function BookingsComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    \u0275\u0275property("value", $index_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2);
  }
}
function BookingsComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("alert alert-", ctx_r0.coType(), " mb-3");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.coMsg());
  }
}
function BookingsComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2, "Yuklanmoqda...");
    \u0275\u0275elementEnd()();
  }
}
function BookingsComponent_For_89_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function BookingsComponent_For_89_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const b_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.quickCheckout(b_r5.roomNumber));
    });
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_For_89_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function BookingsComponent_For_89_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const b_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelBooking(b_r5.id));
    });
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementEnd();
  }
}
function BookingsComponent_For_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "code", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "div", 39);
    \u0275\u0275template(18, BookingsComponent_For_89_Conditional_18_Template, 2, 0, "button", 40)(19, BookingsComponent_For_89_Conditional_19_Template, 2, 0, "button", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r5.reservationNumber || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.guestName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r5.roomNumber || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", b_r5.durationInDays, " kun");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge ", ctx_r0.statusCss(b_r5.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(b_r5.status));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(b_r5.status === "CheckedIn" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(b_r5.status === "Confirmed" || b_r5.status === "Pending" ? 19 : -1);
  }
}
function BookingsComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2, "Bronlar yo'q");
    \u0275\u0275elementEnd()();
  }
}
var BookingsComponent = class _BookingsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.bookings = signal([]);
    this.loading = signal(true);
    this.ciMsg = signal("");
    this.coMsg = signal("");
    this.ciType = signal("success");
    this.coType = signal("success");
    this.ci = { guestName: "", roomStyle: 0, floorPreference: "", durationInDays: 1, advancePayment: 0 };
    this.co = { roomNumber: "", discountCode: "" };
    this.styleNames = ["Standard", "Deluxe", "FamilySuite", "BusinessSuite"];
  }
  ngOnInit() {
    this.loadBookings();
  }
  loadBookings() {
    this.loading.set(true);
    this.api.getBookings().subscribe((r) => {
      this.bookings.set(r || []);
      this.loading.set(false);
    });
  }
  doCheckIn() {
    if (!this.ci.guestName.trim()) {
      this.showCiMsg("Mehmon ismini kiriting!", "danger");
      return;
    }
    if (this.ci.durationInDays < 1) {
      this.showCiMsg("Muddat kamida 1 kun!", "danger");
      return;
    }
    this.api.checkIn({
      guestName: this.ci.guestName,
      roomStyle: this.ci.roomStyle,
      floorPreference: this.ci.floorPreference ? +this.ci.floorPreference : null,
      durationInDays: this.ci.durationInDays,
      advancePayment: this.ci.advancePayment,
      proximity: 0
    }).subscribe((r) => {
      if (r) {
        this.showCiMsg(`\u2705 Check-in! Xona: ${r.roomNumber || ""}`, "success");
        this.loadBookings();
      } else
        this.showCiMsg("\u274C Bo'sh xona topilmadi yoki xato yuz berdi.", "danger");
    });
  }
  doCheckOut() {
    if (!/^\d{3}$/.test(this.co.roomNumber)) {
      this.showCoMsg("3 raqamli xona raqami kiriting!", "danger");
      return;
    }
    this.api.checkOut({ roomNumber: this.co.roomNumber, discountCode: this.co.discountCode || null }).subscribe((r) => {
      if (r) {
        this.showCoMsg(`\u2705 Checkout! Jami: $${r.totalAmount || 0}`, "success");
        this.loadBookings();
      } else
        this.showCoMsg("\u274C Bu xonada faol mehmon topilmadi.", "danger");
    });
  }
  cancelBooking(id) {
    if (!confirm("Bronni bekor qilasizmi?"))
      return;
    this.api.cancelBooking(id).subscribe((r) => {
      if (r) {
        alert(`\u2705 ${r.message}`);
        this.loadBookings();
      }
    });
  }
  quickCheckout(roomNumber) {
    if (!confirm(`${roomNumber}-xonadan checkout qilinsinmi?`))
      return;
    this.api.checkOut({ roomNumber }).subscribe((r) => {
      if (r) {
        alert(`\u2705 Checkout! Jami: $${r.totalAmount || 0}`);
        this.loadBookings();
      }
    });
  }
  showCiMsg(msg, type) {
    this.ciMsg.set(msg);
    this.ciType.set(type);
    setTimeout(() => this.ciMsg.set(""), 4e3);
  }
  showCoMsg(msg, type) {
    this.coMsg.set(msg);
    this.coType.set(type);
    setTimeout(() => this.coMsg.set(""), 4e3);
  }
  statusLabel(s) {
    const m = {
      Confirmed: "Tasdiqlangan",
      CheckedIn: "Joylashgan",
      CheckedOut: "Chiqqan",
      Canceled: "Bekor",
      Pending: "Kutmoqda"
    };
    return m[s] || s;
  }
  statusCss(s) {
    const m = {
      Confirmed: "status-reserved",
      CheckedIn: "status-available",
      CheckedOut: "status-pending",
      Canceled: "status-maintenance",
      Pending: "status-pending"
    };
    return m[s] || "status-pending";
  }
  fmtDate(d) {
    if (!d)
      return "\u2014";
    try {
      return new Date(d).toLocaleDateString("uz-UZ", { day: "2-digit", month: "2-digit", year: "2-digit" });
    } catch {
      return d;
    }
  }
  static {
    this.\u0275fac = function BookingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingsComponent, selectors: [["app-bookings"]], decls: 91, vars: 10, consts: [[1, "page-header"], [1, "page-title"], [1, "bi", "bi-calendar-check"], [1, "page-sub"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-arrow-clockwise"], [1, "layout-grid"], [1, "forms-col"], [1, "card", "mb-4"], [1, "card-header"], [1, "bi", "bi-box-arrow-in-right", "text-success"], [1, "card-body"], [3, "class"], [1, "mb-3"], [1, "form-label"], ["placeholder", "Ism Familiya", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "row", "g-2", "mb-3"], [1, "col-6"], ["value", ""], ["value", "1"], ["value", "2"], ["type", "number", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-success", "w-100", 3, "click"], [1, "bi", "bi-box-arrow-in-right"], [1, "card"], [1, "bi", "bi-box-arrow-right", "text-warning"], ["placeholder", "Masalan: 101", "maxlength", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "HOTEL10, VIP20, STAFF50", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-warning", "w-100", 3, "click"], [1, "bi", "bi-box-arrow-right"], [1, "table-col"], [1, "bi", "bi-list-ul"], [1, "table-responsive"], [1, "table"], ["colspan", "7", 1, "text-center", "text-muted", "py-4"], [1, "text-muted"], [1, "res-code"], [1, "action-btns"], [1, "btn", "btn-warning", "btn-sm"], [1, "btn", "btn-danger", "btn-sm"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "bi", "bi-x"]], template: function BookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275element(3, "i", 2);
        \u0275\u0275text(4, " Bronlar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Check-in, Check-out va bron boshqaruvi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function BookingsComponent_Template_button_click_7_listener() {
          return ctx.loadBookings();
        });
        \u0275\u0275element(8, "i", 5);
        \u0275\u0275text(9, " Yangilash ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9);
        \u0275\u0275element(14, "i", 10);
        \u0275\u0275text(15, " Yangi Check-In");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11);
        \u0275\u0275template(17, BookingsComponent_Conditional_17_Template, 2, 4, "div", 12);
        \u0275\u0275elementStart(18, "div", 13)(19, "label", 14);
        \u0275\u0275text(20, "Mehmon Ismi *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.ci.guestName, $event) || (ctx.ci.guestName = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 13)(23, "label", 14);
        \u0275\u0275text(24, "Xona Turi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "select", 16);
        \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_Template_select_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.ci.roomStyle, $event) || (ctx.ci.roomStyle = $event);
          return $event;
        });
        \u0275\u0275repeaterCreate(26, BookingsComponent_For_27_Template, 2, 2, "option", 17, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 18)(29, "div", 19)(30, "label", 14);
        \u0275\u0275text(31, "Qavat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "select", 16);
        \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_Template_select_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.ci.floorPreference, $event) || (ctx.ci.floorPreference = $event);
          return $event;
        });
        \u0275\u0275elementStart(33, "option", 20);
        \u0275\u0275text(34, "Farq qilmaydi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "option", 21);
        \u0275\u0275text(36, "1-Qavat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "option", 22);
        \u0275\u0275text(38, "2-Qavat");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 19)(40, "label", 14);
        \u0275\u0275text(41, "Muddat (kun) *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "input", 23);
        \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_Template_input_ngModelChange_42_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.ci.durationInDays, $event) || (ctx.ci.durationInDays = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "button", 24);
        \u0275\u0275listener("click", function BookingsComponent_Template_button_click_43_listener() {
          return ctx.doCheckIn();
        });
        \u0275\u0275element(44, "i", 25);
        \u0275\u0275text(45, " Check-In Qilish ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 26)(47, "div", 9);
        \u0275\u0275element(48, "i", 27);
        \u0275\u0275text(49, " Check-Out");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 11);
        \u0275\u0275template(51, BookingsComponent_Conditional_51_Template, 2, 4, "div", 12);
        \u0275\u0275elementStart(52, "div", 13)(53, "label", 14);
        \u0275\u0275text(54, "Xona Raqami *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "input", 28);
        \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_Template_input_ngModelChange_55_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.co.roomNumber, $event) || (ctx.co.roomNumber = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 13)(57, "label", 14);
        \u0275\u0275text(58, "Chegirma Kodi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "input", 29);
        \u0275\u0275twoWayListener("ngModelChange", function BookingsComponent_Template_input_ngModelChange_59_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.co.discountCode, $event) || (ctx.co.discountCode = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "button", 30);
        \u0275\u0275listener("click", function BookingsComponent_Template_button_click_60_listener() {
          return ctx.doCheckOut();
        });
        \u0275\u0275element(61, "i", 31);
        \u0275\u0275text(62, " Check-Out Qilish ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(63, "div", 32)(64, "div", 26)(65, "div", 9);
        \u0275\u0275element(66, "i", 33);
        \u0275\u0275text(67, " Barcha Bronlar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 34)(69, "table", 35)(70, "thead")(71, "tr")(72, "th");
        \u0275\u0275text(73, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "th");
        \u0275\u0275text(75, "Bron \u2116");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "th");
        \u0275\u0275text(77, "Mehmon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "th");
        \u0275\u0275text(79, "Xona");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "th");
        \u0275\u0275text(81, "Muddat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "th");
        \u0275\u0275text(83, "Holat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "th");
        \u0275\u0275text(85, "Amal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(86, "tbody");
        \u0275\u0275template(87, BookingsComponent_Conditional_87_Template, 3, 0, "tr");
        \u0275\u0275repeaterCreate(88, BookingsComponent_For_89_Template, 20, 11, "tr", null, _forTrack0);
        \u0275\u0275template(90, BookingsComponent_Conditional_90_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275conditional(ctx.ciMsg() ? 17 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.ci.guestName);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.ci.roomStyle);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.styleNames);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.ci.floorPreference);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.ci.durationInDays);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.coMsg() ? 51 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.co.roomNumber);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.co.discountCode);
        \u0275\u0275advance(28);
        \u0275\u0275conditional(ctx.loading() ? 87 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.bookings());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() && ctx.bookings().length === 0 ? 90 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, MinValidator, NgModel], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 4px;\n}\n.layout-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .layout-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.res-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  background: var(--bg-hover);\n  padding: 2px 6px;\n  border-radius: 4px;\n  color: var(--accent);\n}\n/*# sourceMappingURL=bookings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingsComponent, [{
    type: Component,
    args: [{ selector: "app-bookings", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-header">
  <div>
    <h1 class="page-title"><i class="bi bi-calendar-check"></i> Bronlar</h1>
    <p class="page-sub">Check-in, Check-out va bron boshqaruvi</p>
  </div>
  <button class="btn btn-outline-secondary btn-sm" (click)="loadBookings()">
    <i class="bi bi-arrow-clockwise"></i> Yangilash
  </button>
</div>

<div class="layout-grid">
  <!-- LEFT \u2014 forms -->
  <div class="forms-col">

    <!-- Check-In Card -->
    <div class="card mb-4">
      <div class="card-header"><i class="bi bi-box-arrow-in-right text-success"></i> Yangi Check-In</div>
      <div class="card-body">
        @if (ciMsg()) {
          <div class="alert alert-{{ ciType() }} mb-3">{{ ciMsg() }}</div>
        }
        <div class="mb-3">
          <label class="form-label">Mehmon Ismi *</label>
          <input [(ngModel)]="ci.guestName" class="form-control" placeholder="Ism Familiya"/>
        </div>
        <div class="mb-3">
          <label class="form-label">Xona Turi</label>
          <select [(ngModel)]="ci.roomStyle" class="form-select">
            @for (s of styleNames; track $index) {
              <option [value]="$index">{{ s }}</option>
            }
          </select>
        </div>
        <div class="row g-2 mb-3">
          <div class="col-6">
            <label class="form-label">Qavat</label>
            <select [(ngModel)]="ci.floorPreference" class="form-select">
              <option value="">Farq qilmaydi</option>
              <option value="1">1-Qavat</option>
              <option value="2">2-Qavat</option>
            </select>
          </div>
          <div class="col-6">
            <label class="form-label">Muddat (kun) *</label>
            <input [(ngModel)]="ci.durationInDays" type="number" class="form-control" min="1"/>
          </div>
        </div>
        <button class="btn btn-success w-100" (click)="doCheckIn()">
          <i class="bi bi-box-arrow-in-right"></i> Check-In Qilish
        </button>
      </div>
    </div>

    <!-- Check-Out Card -->
    <div class="card">
      <div class="card-header"><i class="bi bi-box-arrow-right text-warning"></i> Check-Out</div>
      <div class="card-body">
        @if (coMsg()) {
          <div class="alert alert-{{ coType() }} mb-3">{{ coMsg() }}</div>
        }
        <div class="mb-3">
          <label class="form-label">Xona Raqami *</label>
          <input [(ngModel)]="co.roomNumber" class="form-control" placeholder="Masalan: 101" maxlength="3"/>
        </div>
        <div class="mb-3">
          <label class="form-label">Chegirma Kodi</label>
          <input [(ngModel)]="co.discountCode" class="form-control" placeholder="HOTEL10, VIP20, STAFF50"/>
        </div>
        <button class="btn btn-warning w-100" (click)="doCheckOut()">
          <i class="bi bi-box-arrow-right"></i> Check-Out Qilish
        </button>
      </div>
    </div>

  </div>

  <!-- RIGHT \u2014 bookings table -->
  <div class="table-col">
    <div class="card">
      <div class="card-header"><i class="bi bi-list-ul"></i> Barcha Bronlar</div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>#</th><th>Bron \u2116</th><th>Mehmon</th><th>Xona</th>
              <th>Muddat</th><th>Holat</th><th>Amal</th>
            </tr>
          </thead>
          <tbody>
            @if (loading()) {
              <tr><td colspan="7" class="text-center text-muted py-4">Yuklanmoqda...</td></tr>
            }
            @for (b of bookings(); track b.id) {
              <tr>
                <td class="text-muted">{{ b.id }}</td>
                <td><code class="res-code">{{ b.reservationNumber || '\u2014' }}</code></td>
                <td>{{ b.guestName || '\u2014' }}</td>
                <td><strong>{{ b.roomNumber || '\u2014' }}</strong></td>
                <td>{{ b.durationInDays }} kun</td>
                <td><span class="badge {{ statusCss(b.status) }}">{{ statusLabel(b.status) }}</span></td>
                <td>
                  <div class="action-btns">
                    @if (b.status === 'CheckedIn') {
                      <button class="btn btn-warning btn-sm" (click)="quickCheckout(b.roomNumber)">
                        <i class="bi bi-box-arrow-right"></i>
                      </button>
                    }
                    @if (b.status === 'Confirmed' || b.status === 'Pending') {
                      <button class="btn btn-danger btn-sm" (click)="cancelBooking(b.id)">
                        <i class="bi bi-x"></i>
                      </button>
                    }
                  </div>
                </td>
              </tr>
            }
            @if (!loading() && bookings().length === 0) {
              <tr><td colspan="7" class="text-center text-muted py-4">Bronlar yo'q</td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/components/bookings/bookings.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-title i {\n  color: var(--accent);\n}\n.page-sub {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 4px;\n}\n.layout-grid {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .layout-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.action-btns {\n  display: flex;\n  gap: 4px;\n}\n.res-code {\n  font-size: 11px;\n  background: var(--bg-hover);\n  padding: 2px 6px;\n  border-radius: 4px;\n  color: var(--accent);\n}\n/*# sourceMappingURL=bookings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingsComponent, { className: "BookingsComponent", filePath: "app/components/bookings/bookings.component.ts", lineNumber: 13 });
})();
export {
  BookingsComponent
};
//# sourceMappingURL=chunk-2CVBIEPT.js.map
