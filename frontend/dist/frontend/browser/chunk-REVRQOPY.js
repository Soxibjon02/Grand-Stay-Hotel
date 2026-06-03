import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-2PIQRKKB.js";
import {
  ApiService
} from "./chunk-A4GLKYPK.js";
import {
  CommonModule,
  Component,
  computed,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction4,
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

// src/app/components/maintenance/maintenance.component.ts
var _c0 = () => ({ k: "all", l: "Barchasi" });
var _c1 = () => ({ k: "Pending", l: "Kutilmoqda" });
var _c2 = () => ({ k: "InProgress", l: "Bajarilmoqda" });
var _c3 = () => ({ k: "Completed", l: "Bajarildi" });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.k;
var _forTrack2 = ($index, $item) => $item.id;
function MaintenanceComponent_Conditional_10_Template(rf, ctx) {
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
function MaintenanceComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275property("value", cat_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r2);
  }
}
function MaintenanceComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function MaintenanceComponent_For_37_Template_button_click_0_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.form.priority = p_r4.value);
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.form.priority === p_r4.value);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("bi ", p_r4.icon, " ", p_r4.cls, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r4.label, " ");
  }
}
function MaintenanceComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function MaintenanceComponent_For_44_Template_button_click_0_listener() {
      const tab_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterStatus.set(tab_r6.k));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.filterStatus() === tab_r6.k);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r6.l, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.countByStatus(tab_r6.k));
  }
}
function MaintenanceComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2, " Yuklanmoqda...");
    \u0275\u0275elementEnd();
  }
}
function MaintenanceComponent_Conditional_46_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r7.technicianName, "");
  }
}
function MaintenanceComponent_Conditional_46_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function MaintenanceComponent_Conditional_46_For_2_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const t_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.complete(t_r7.id));
    });
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275text(2, " Tugatildi ");
    \u0275\u0275elementEnd();
  }
}
function MaintenanceComponent_Conditional_46_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 35)(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 39)(10, "span");
    \u0275\u0275element(11, "i");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 40);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 41)(18, "span");
    \u0275\u0275element(19, "i", 42);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, MaintenanceComponent_Conditional_46_For_2_Conditional_21_Template, 3, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, MaintenanceComponent_Conditional_46_For_2_Conditional_22_Template, 3, 0, "button", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("done", t_r7.status === "Completed")("inprogress", t_r7.status === "InProgress");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", t_r7.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F6AA} Xona ", t_r7.roomNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7.category);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge priority-badge priority-", t_r7.priority, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("bi ", ctx_r0.priorityInfo(t_r7.priority).icon, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.priorityInfo(t_r7.priority).label, " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r0.statusCss(t_r7.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(t_r7.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.fmtDate(t_r7.reportedAt), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r7.technicianName ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canComplete(t_r7.status) ? 22 : -1);
  }
}
function MaintenanceComponent_Conditional_46_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Bu kategoriyada ticketlar yo'q");
    \u0275\u0275elementEnd()();
  }
}
function MaintenanceComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, MaintenanceComponent_Conditional_46_For_2_Template, 23, 22, "div", 31, _forTrack2);
    \u0275\u0275template(3, MaintenanceComponent_Conditional_46_Conditional_3_Template, 4, 0, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filtered());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.filtered().length === 0 ? 3 : -1);
  }
}
var MaintenanceComponent = class _MaintenanceComponent {
  constructor() {
    this.api = inject(ApiService);
    this.tickets = signal([]);
    this.loading = signal(true);
    this.msg = signal("");
    this.msgType = signal("success");
    this.filterStatus = signal("all");
    this.form = { roomNumber: "", category: "Plumbing", description: "", priority: 2 };
    this.categories = ["Plumbing", "Electrical", "HVAC", "Furniture", "Cleaning", "Security", "Other"];
    this.priorities = [
      { value: 1, label: "Past", icon: "bi-arrow-down-circle", cls: "text-success" },
      { value: 2, label: "O'rta", icon: "bi-dash-circle", cls: "text-info" },
      { value: 3, label: "Yuqori", icon: "bi-arrow-up-circle", cls: "text-warning" },
      { value: 4, label: "Kritik", icon: "bi-exclamation-triangle-fill", cls: "text-danger" }
    ];
    this.filtered = computed(() => {
      const s = this.filterStatus();
      if (s === "all")
        return this.tickets();
      return this.tickets().filter((t) => t.status === s);
    });
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.api.getTickets().subscribe((t) => {
      this.tickets.set(t || []);
      this.loading.set(false);
    });
  }
  submit() {
    if (!this.form.roomNumber.trim() || !this.form.description.trim()) {
      this.show("\u274C Xona raqami va tavsif majburiy", "danger");
      return;
    }
    this.api.createTicket(this.form).subscribe((r) => {
      if (r) {
        this.show(`\u2705 Ticket yaratildi \u2014 Xona ${this.form.roomNumber}`, "success");
        this.form = { roomNumber: "", category: "Plumbing", description: "", priority: 2 };
        this.load();
      } else {
        this.show("\u274C Xato yuz berdi", "danger");
      }
    });
  }
  complete(id) {
    this.api.completeTicket(id).subscribe((r) => {
      if (r) {
        this.show("\u2705 Ticket yopildi", "success");
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
  // TicketStatus: Pending, Queued, Assigned, InProgress, Completed, Canceled
  statusCss(s) {
    if (s === "Completed")
      return "status-done";
    if (s === "InProgress" || s === "Assigned")
      return "status-inprogress";
    return "status-pending";
  }
  statusLabel(s) {
    const map = {
      Pending: "Kutilmoqda",
      Queued: "Navbatda",
      Assigned: "Tayinlandi",
      InProgress: "Bajarilmoqda",
      Completed: "Bajarildi",
      Canceled: "Bekor"
    };
    return map[s] ?? s;
  }
  canComplete(status) {
    return status === "Assigned" || status === "InProgress";
  }
  priorityInfo(p) {
    return this.priorities.find((x) => x.value === p) ?? this.priorities[1];
  }
  countByStatus(s) {
    return s === "all" ? this.tickets().length : this.tickets().filter((t) => t.status === s).length;
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
    this.\u0275fac = function MaintenanceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MaintenanceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaintenanceComponent, selectors: [["app-maintenance"]], decls: 47, vars: 15, consts: [[1, "page-header"], [1, "page-title"], [1, "bi", "bi-tools"], [1, "page-sub"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-arrow-clockwise"], [3, "class"], [1, "layout-grid"], [1, "card"], [1, "card-header"], [1, "bi", "bi-plus-circle", "text-warning"], [1, "card-body"], [1, "mb-3"], [1, "form-label"], ["placeholder", "Masalan: 201", "maxlength", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value"], ["rows", "3", "placeholder", "Muammoni batafsil tavsiflang...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-4"], [1, "priority-pills"], [1, "priority-pill", 3, "active"], [1, "btn", "btn-warning", "w-100", 3, "click"], [1, "bi", "bi-ticket-perforated"], [1, "filter-tabs", "mb-3"], [1, "filter-tab", 3, "active"], [1, "loading-state"], [1, "tickets-list"], [1, "priority-pill", 3, "click"], [1, "filter-tab", 3, "click"], [1, "count-badge"], [1, "bi", "bi-hourglass-split"], [1, "ticket-card", 3, "done", "inprogress"], [1, "empty-state"], [1, "ticket-card"], [1, "ticket-top"], [1, "ticket-left"], [1, "ticket-id"], [1, "ticket-room"], [1, "category-badge"], [1, "ticket-badges"], [1, "ticket-desc"], [1, "ticket-meta"], [1, "bi", "bi-clock"], [1, "btn", "btn-success", "btn-sm", "mt-2"], [1, "bi", "bi-person-gear"], [1, "btn", "btn-success", "btn-sm", "mt-2", 3, "click"], [1, "bi", "bi-check-lg"], [1, "bi", "bi-tools", "fs-1", "text-muted"]], template: function MaintenanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275element(3, "i", 2);
        \u0275\u0275text(4, " Texnik Xizmat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Ta'mirlash va texnik muammolar ticketlari");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function MaintenanceComponent_Template_button_click_7_listener() {
          return ctx.load();
        });
        \u0275\u0275element(8, "i", 5);
        \u0275\u0275text(9, " Yangilash ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, MaintenanceComponent_Conditional_10_Template, 2, 4, "div", 6);
        \u0275\u0275elementStart(11, "div", 7)(12, "div")(13, "div", 8)(14, "div", 9);
        \u0275\u0275element(15, "i", 10);
        \u0275\u0275text(16, " Yangi Ticket");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "label", 13);
        \u0275\u0275text(20, "Xona Raqami *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function MaintenanceComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.roomNumber, $event) || (ctx.form.roomNumber = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 12)(23, "label", 13);
        \u0275\u0275text(24, "Kategoriya");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "select", 15);
        \u0275\u0275twoWayListener("ngModelChange", function MaintenanceComponent_Template_select_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.category, $event) || (ctx.form.category = $event);
          return $event;
        });
        \u0275\u0275repeaterCreate(26, MaintenanceComponent_For_27_Template, 2, 2, "option", 16, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 12)(29, "label", 13);
        \u0275\u0275text(30, "Tavsif *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "textarea", 17);
        \u0275\u0275twoWayListener("ngModelChange", function MaintenanceComponent_Template_textarea_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.description, $event) || (ctx.form.description = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 18)(33, "label", 13);
        \u0275\u0275text(34, "Muhimlik");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 19);
        \u0275\u0275repeaterCreate(36, MaintenanceComponent_For_37_Template, 3, 7, "button", 20, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "button", 21);
        \u0275\u0275listener("click", function MaintenanceComponent_Template_button_click_38_listener() {
          return ctx.submit();
        });
        \u0275\u0275element(39, "i", 22);
        \u0275\u0275text(40, " Ticket Yaratish ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "div")(42, "div", 23);
        \u0275\u0275repeaterCreate(43, MaintenanceComponent_For_44_Template, 4, 4, "button", 24, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, MaintenanceComponent_Conditional_45_Template, 3, 0, "div", 25)(46, MaintenanceComponent_Conditional_46_Template, 4, 1, "div", 26);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.msg() ? 10 : -1);
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.roomNumber);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.category);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.description);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.priorities);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(\u0275\u0275pureFunction4(10, _c4, \u0275\u0275pureFunction0(6, _c0), \u0275\u0275pureFunction0(7, _c1), \u0275\u0275pureFunction0(8, _c2), \u0275\u0275pureFunction0(9, _c3)));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 46 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 4px;\n}\n.layout-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .layout-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.priority-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.priority-pill[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  cursor: pointer;\n  border: 1px solid var(--border);\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  transition: var(--transition);\n}\n.priority-pill.active[_ngcontent-%COMP%] {\n  border-color: var(--warning);\n  background: rgba(245, 158, 11, 0.1);\n  color: var(--warning);\n}\n.priority-pill[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-hover);\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.filter-tab[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 12px;\n  cursor: pointer;\n  border: 1px solid var(--border);\n  background: transparent;\n  color: var(--text-secondary);\n  transition: var(--transition);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.filter-tab.active[_ngcontent-%COMP%] {\n  background: var(--accent-glow);\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.filter-tab[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-hover);\n  color: var(--text-primary);\n}\n.count-badge[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n  font-size: 10px;\n  padding: 1px 6px;\n  border-radius: 10px;\n  font-weight: 700;\n}\n.tickets-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.ticket-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 16px;\n  transition: var(--transition);\n}\n.ticket-card.done[_ngcontent-%COMP%] {\n  border-color: rgba(34, 197, 94, 0.3);\n  opacity: 0.8;\n}\n.ticket-card.inprogress[_ngcontent-%COMP%] {\n  border-color: rgba(56, 189, 248, 0.3);\n}\n.ticket-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-hover);\n}\n.ticket-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n  gap: 8px;\n}\n.ticket-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ticket-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n}\n.ticket-id[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  background: var(--bg-hover);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.ticket-room[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.category-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  background: rgba(124, 111, 255, 0.15);\n  color: var(--accent);\n  padding: 2px 8px;\n  border-radius: 4px;\n  border: 1px solid rgba(124, 111, 255, 0.3);\n}\n.ticket-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n  line-height: 1.5;\n}\n.ticket-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.ticket-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n.priority-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.priority-0[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #22c55e;\n}\n.priority-1[_ngcontent-%COMP%] {\n  background: rgba(56, 189, 248, 0.15);\n  color: #38bdf8;\n}\n.priority-2[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.priority-3[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  color: #f87171;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 60px;\n}\n.loading-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=maintenance.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenanceComponent, [{
    type: Component,
    args: [{ selector: "app-maintenance", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-header">
  <div>
    <h1 class="page-title"><i class="bi bi-tools"></i> Texnik Xizmat</h1>
    <p class="page-sub">Ta'mirlash va texnik muammolar ticketlari</p>
  </div>
  <button class="btn btn-outline-secondary btn-sm" (click)="load()">
    <i class="bi bi-arrow-clockwise"></i> Yangilash
  </button>
</div>

@if (msg()) {
  <div class="alert alert-{{ msgType() }} mb-4">{{ msg() }}</div>
}

<div class="layout-grid">
  <!-- LEFT \u2014 create ticket form -->
  <div>
    <div class="card">
      <div class="card-header"><i class="bi bi-plus-circle text-warning"></i> Yangi Ticket</div>
      <div class="card-body">
        <div class="mb-3">
          <label class="form-label">Xona Raqami *</label>
          <input [(ngModel)]="form.roomNumber" class="form-control" placeholder="Masalan: 201" maxlength="3"/>
        </div>
        <div class="mb-3">
          <label class="form-label">Kategoriya</label>
          <select [(ngModel)]="form.category" class="form-select">
            @for (cat of categories; track $index) {
              <option [value]="cat">{{ cat }}</option>
            }
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Tavsif *</label>
          <textarea [(ngModel)]="form.description" class="form-control" rows="3"
                    placeholder="Muammoni batafsil tavsiflang..."></textarea>
        </div>
        <div class="mb-4">
          <label class="form-label">Muhimlik</label>
          <div class="priority-pills">
            @for (p of priorities; track p.value) {
              <button class="priority-pill" [class.active]="form.priority === p.value"
                      (click)="form.priority = p.value">
                <i class="bi {{ p.icon }} {{ p.cls }}"></i> {{ p.label }}
              </button>
            }
          </div>
        </div>
        <button class="btn btn-warning w-100" (click)="submit()">
          <i class="bi bi-ticket-perforated"></i> Ticket Yaratish
        </button>
      </div>
    </div>
  </div>

  <!-- RIGHT \u2014 tickets list with filters -->
  <div>
    <!-- filter tabs -->
    <div class="filter-tabs mb-3">
      @for (tab of [{k:'all',l:'Barchasi'},{k:'Pending',l:'Kutilmoqda'},{k:'InProgress',l:'Bajarilmoqda'},{k:'Completed',l:'Bajarildi'}]; track tab.k) {
        <button class="filter-tab" [class.active]="filterStatus()===tab.k"
                (click)="filterStatus.set(tab.k)">
          {{ tab.l }}
          <span class="count-badge">{{ countByStatus(tab.k) }}</span>
        </button>
      }
    </div>

    @if (loading()) {
      <div class="loading-state"><i class="bi bi-hourglass-split"></i> Yuklanmoqda...</div>
    }
    @if (!loading()) {
      <div class="tickets-list">
        @for (t of filtered(); track t.id) {
          <div class="ticket-card" [class.done]="t.status==='Completed'" [class.inprogress]="t.status==='InProgress'">
            <div class="ticket-top">
              <div class="ticket-left">
                <span class="ticket-id">#{{ t.id }}</span>
                <span class="ticket-room">\u{1F6AA} Xona {{ t.roomNumber }}</span>
                <span class="category-badge">{{ t.category }}</span>
              </div>
              <div class="ticket-badges">
                <span class="badge priority-badge priority-{{ t.priority }}">
                  <i class="bi {{ priorityInfo(t.priority).icon }}"></i>
                  {{ priorityInfo(t.priority).label }}
                </span>
                <span class="badge {{ statusCss(t.status) }}">
                  {{ statusLabel(t.status) }}
                </span>
              </div>
            </div>
            <div class="ticket-desc">{{ t.description }}</div>
            <div class="ticket-meta">
              <span><i class="bi bi-clock"></i> {{ fmtDate(t.reportedAt) }}</span>
              @if (t.technicianName) {
                <span><i class="bi bi-person-gear"></i> {{ t.technicianName }}</span>
              }
            </div>
            @if (canComplete(t.status)) {
              <button class="btn btn-success btn-sm mt-2" (click)="complete(t.id)">
                <i class="bi bi-check-lg"></i> Tugatildi
              </button>
            }
          </div>
        }
        @if (filtered().length === 0) {
          <div class="empty-state">
            <i class="bi bi-tools fs-1 text-muted"></i>
            <p>Bu kategoriyada ticketlar yo'q</p>
          </div>
        }
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/components/maintenance/maintenance.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-title i {\n  color: var(--warning);\n}\n.page-sub {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 4px;\n}\n.layout-grid {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .layout-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.priority-pills {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.priority-pill {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  cursor: pointer;\n  border: 1px solid var(--border);\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  transition: var(--transition);\n}\n.priority-pill.active {\n  border-color: var(--warning);\n  background: rgba(245, 158, 11, 0.1);\n  color: var(--warning);\n}\n.priority-pill:hover {\n  border-color: var(--border-hover);\n}\n.filter-tabs {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.filter-tab {\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 12px;\n  cursor: pointer;\n  border: 1px solid var(--border);\n  background: transparent;\n  color: var(--text-secondary);\n  transition: var(--transition);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.filter-tab.active {\n  background: var(--accent-glow);\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.filter-tab:hover {\n  border-color: var(--border-hover);\n  color: var(--text-primary);\n}\n.count-badge {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n  font-size: 10px;\n  padding: 1px 6px;\n  border-radius: 10px;\n  font-weight: 700;\n}\n.tickets-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.ticket-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 16px;\n  transition: var(--transition);\n}\n.ticket-card.done {\n  border-color: rgba(34, 197, 94, 0.3);\n  opacity: 0.8;\n}\n.ticket-card.inprogress {\n  border-color: rgba(56, 189, 248, 0.3);\n}\n.ticket-card:hover {\n  border-color: var(--border-hover);\n}\n.ticket-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n  gap: 8px;\n}\n.ticket-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ticket-badges {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n}\n.ticket-id {\n  font-size: 11px;\n  color: var(--text-muted);\n  background: var(--bg-hover);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.ticket-room {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.category-badge {\n  font-size: 11px;\n  background: rgba(124, 111, 255, 0.15);\n  color: var(--accent);\n  padding: 2px 8px;\n  border-radius: 4px;\n  border: 1px solid rgba(124, 111, 255, 0.3);\n}\n.ticket-desc {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n  line-height: 1.5;\n}\n.ticket-meta {\n  display: flex;\n  gap: 12px;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.ticket-meta i {\n  margin-right: 3px;\n}\n.priority-badge {\n  font-size: 10px;\n}\n.priority-0 {\n  background: rgba(34, 197, 94, 0.15);\n  color: #22c55e;\n}\n.priority-1 {\n  background: rgba(56, 189, 248, 0.15);\n  color: #38bdf8;\n}\n.priority-2 {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.priority-3 {\n  background: rgba(239, 68, 68, 0.2);\n  color: #f87171;\n  animation: pulse 1.5s infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.loading-state,\n.empty-state {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 60px;\n}\n.loading-state i,\n.empty-state i {\n  margin-right: 8px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.empty-state p {\n  font-size: 14px;\n}\n/*# sourceMappingURL=maintenance.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaintenanceComponent, { className: "MaintenanceComponent", filePath: "app/components/maintenance/maintenance.component.ts", lineNumber: 20 });
})();
export {
  MaintenanceComponent
};
//# sourceMappingURL=chunk-REVRQOPY.js.map
