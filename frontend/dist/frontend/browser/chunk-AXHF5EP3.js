import {
  FormsModule,
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
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
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

// src/app/components/housekeeping/housekeeping.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function HousekeepingComponent_Conditional_10_Template(rf, ctx) {
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
function HousekeepingComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2, " Yuklanmoqda...");
    \u0275\u0275elementEnd();
  }
}
function HousekeepingComponent_Conditional_12_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2.housekeeperName, "");
  }
}
function HousekeepingComponent_Conditional_12_For_2_Conditional_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r4 = ctx.$implicit;
    \u0275\u0275property("value", k_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r4.name);
  }
}
function HousekeepingComponent_Conditional_12_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function HousekeepingComponent_Conditional_12_For_2_Conditional_13_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const t_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedKeeper[t_r2.id], $event) || (ctx_r0.selectedKeeper[t_r2.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "option", 23);
    \u0275\u0275text(3, "Xodim tanlang");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, HousekeepingComponent_Conditional_12_For_2_Conditional_13_For_5_Template, 2, 2, "option", 23, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 24);
    \u0275\u0275listener("click", function HousekeepingComponent_Conditional_12_For_2_Conditional_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const t_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.start(t_r2.id));
    });
    \u0275\u0275element(7, "i", 25);
    \u0275\u0275text(8, " Boshlash ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedKeeper[t_r2.id]);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.housekeepers());
  }
}
function HousekeepingComponent_Conditional_12_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function HousekeepingComponent_Conditional_12_For_2_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const t_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.complete(t_r2.id));
    });
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2, " Tugallandi ");
    \u0275\u0275elementEnd();
  }
}
function HousekeepingComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275element(5, "i");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, HousekeepingComponent_Conditional_12_For_2_Conditional_9_Template, 3, 1, "div", 16);
    \u0275\u0275elementStart(10, "div", 17);
    \u0275\u0275element(11, "i", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, HousekeepingComponent_Conditional_12_For_2_Conditional_13_Template, 9, 2, "div", 19)(14, HousekeepingComponent_Conditional_12_For_2_Conditional_14_Template, 3, 0, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("done", t_r2.status === "Done")("inprogress", t_r2.status === "InProgress");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F6AA} ", t_r2.roomNumber, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge ", ctx_r0.statusCss(t_r2.status), "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("bi ", ctx_r0.statusIcon(t_r2.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r2.housekeeperName ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.fmtDate(t_r2.createdAt), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r2.status === "Pending" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r2.status === "InProgress" ? 14 : -1);
  }
}
function HousekeepingComponent_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Hozircha barcha xonalar toza! \u2705");
    \u0275\u0275elementEnd()();
  }
}
function HousekeepingComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, HousekeepingComponent_Conditional_12_For_2_Template, 15, 17, "div", 10, _forTrack0);
    \u0275\u0275template(3, HousekeepingComponent_Conditional_12_Conditional_3_Template, 4, 0, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.tasks());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.tasks().length === 0 ? 3 : -1);
  }
}
var HousekeepingComponent = class _HousekeepingComponent {
  constructor() {
    this.api = inject(ApiService);
    this.tasks = signal([]);
    this.housekeepers = signal([]);
    this.loading = signal(true);
    this.msg = signal("");
    this.msgType = signal("success");
    this.selectedKeeper = {};
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.api.getCleaningTasks().subscribe((t) => {
      this.tasks.set(t || []);
      this.loading.set(false);
    });
    this.api.getHousekeepers().subscribe((k) => {
      this.housekeepers.set(k || []);
    });
  }
  start(id) {
    const hid = this.selectedKeeper[id];
    this.api.startCleaning(id, hid).subscribe((r) => {
      if (r) {
        this.show(`\u2705 ${r.message || "Boshlandi"}`, "success");
        this.load();
      } else
        this.show("\u274C Xato yuz berdi", "danger");
    });
  }
  complete(id) {
    this.api.completeCleaning(id).subscribe((r) => {
      if (r) {
        this.show(`\u2705 ${r.message || "Tugallandi"}`, "success");
        this.load();
      } else
        this.show("\u274C Xato yuz berdi", "danger");
    });
  }
  show(m, t) {
    this.msg.set(m);
    this.msgType.set(t);
    setTimeout(() => this.msg.set(""), 4e3);
  }
  statusCss(s) {
    if (s === "Done")
      return "status-done";
    if (s === "InProgress")
      return "status-inprogress";
    return "status-pending";
  }
  statusIcon(s) {
    if (s === "Done")
      return "bi-check-circle-fill text-success";
    if (s === "InProgress")
      return "bi-play-circle-fill text-info";
    return "bi-clock text-warning";
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
    this.\u0275fac = function HousekeepingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HousekeepingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HousekeepingComponent, selectors: [["app-housekeeping"]], decls: 13, vars: 3, consts: [[1, "page-header"], [1, "page-title"], [1, "bi", "bi-stars"], [1, "page-sub"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-arrow-clockwise"], [3, "class"], [1, "loading-state"], [1, "tasks-grid"], [1, "bi", "bi-hourglass-split"], [1, "task-card", 3, "done", "inprogress"], [1, "empty-state"], [1, "task-card"], [1, "task-header"], [1, "room-badge"], [1, "task-desc"], [1, "task-keeper"], [1, "task-time"], [1, "bi", "bi-clock"], [1, "task-actions"], [1, "btn", "btn-success", "btn-sm", "w-100", "mt-2"], [1, "bi", "bi-person"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "bi", "bi-play-fill"], [1, "btn", "btn-success", "btn-sm", "w-100", "mt-2", 3, "click"], [1, "bi", "bi-check-lg"], [1, "bi", "bi-check-circle", "fs-1", "text-success"]], template: function HousekeepingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275element(3, "i", 2);
        \u0275\u0275text(4, " Tozalash");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Xona tozalash vazifalari");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function HousekeepingComponent_Template_button_click_7_listener() {
          return ctx.load();
        });
        \u0275\u0275element(8, "i", 5);
        \u0275\u0275text(9, " Yangilash ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, HousekeepingComponent_Conditional_10_Template, 2, 4, "div", 6)(11, HousekeepingComponent_Conditional_11_Template, 3, 0, "div", 7)(12, HousekeepingComponent_Conditional_12_Template, 4, 1, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.msg() ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 12 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 4px;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 60px;\n}\n.loading-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.tasks-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.task-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 20px;\n  transition: var(--transition);\n}\n.task-card.done[_ngcontent-%COMP%] {\n  border-color: rgba(34, 197, 94, 0.3);\n}\n.task-card.inprogress[_ngcontent-%COMP%] {\n  border-color: rgba(56, 189, 248, 0.3);\n}\n.task-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-hover);\n}\n.task-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.room-badge[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.task-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n}\n.task-keeper[_ngcontent-%COMP%], \n.task-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-bottom: 4px;\n}\n.task-keeper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.task-time[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.task-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 12px;\n  align-items: center;\n}\n/*# sourceMappingURL=housekeeping.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HousekeepingComponent, [{
    type: Component,
    args: [{ selector: "app-housekeeping", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-header">
  <div>
    <h1 class="page-title"><i class="bi bi-stars"></i> Tozalash</h1>
    <p class="page-sub">Xona tozalash vazifalari</p>
  </div>
  <button class="btn btn-outline-secondary btn-sm" (click)="load()">
    <i class="bi bi-arrow-clockwise"></i> Yangilash
  </button>
</div>

@if (msg()) {
  <div class="alert alert-{{ msgType() }} mb-4">{{ msg() }}</div>
}

@if (loading()) {
  <div class="loading-state"><i class="bi bi-hourglass-split"></i> Yuklanmoqda...</div>
}

@if (!loading()) {
  <div class="tasks-grid">
    @for (t of tasks(); track t.id) {
      <div class="task-card" [class.done]="t.status==='Done'" [class.inprogress]="t.status==='InProgress'">
        <div class="task-header">
          <div class="room-badge">\u{1F6AA} {{ t.roomNumber }}</div>
          <span class="badge {{ statusCss(t.status) }}">
            <i class="bi {{ statusIcon(t.status) }}"></i> {{ t.status }}
          </span>
        </div>
        <div class="task-desc">{{ t.description }}</div>
        @if (t.housekeeperName) {
          <div class="task-keeper"><i class="bi bi-person"></i> {{ t.housekeeperName }}</div>
        }
        <div class="task-time"><i class="bi bi-clock"></i> {{ fmtDate(t.createdAt) }}</div>

        @if (t.status === 'Pending') {
          <div class="task-actions">
            <select class="form-select form-select-sm" [(ngModel)]="selectedKeeper[t.id]">
              <option [value]="undefined">Xodim tanlang</option>
              @for (k of housekeepers(); track k.id) {
                <option [value]="k.id">{{ k.name }}</option>
              }
            </select>
            <button class="btn btn-info btn-sm" (click)="start(t.id)">
              <i class="bi bi-play-fill"></i> Boshlash
            </button>
          </div>
        }
        @if (t.status === 'InProgress') {
          <button class="btn btn-success btn-sm w-100 mt-2" (click)="complete(t.id)">
            <i class="bi bi-check-lg"></i> Tugallandi
          </button>
        }
      </div>
    }
    @if (tasks().length === 0) {
      <div class="empty-state">
        <i class="bi bi-check-circle fs-1 text-success"></i>
        <p>Hozircha barcha xonalar toza! \u2705</p>
      </div>
    }
  </div>
}
`, styles: ["/* src/app/components/housekeeping/housekeeping.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-title i {\n  color: var(--warning);\n}\n.page-sub {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 4px;\n}\n.loading-state,\n.empty-state {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 60px;\n}\n.loading-state i,\n.empty-state i {\n  margin-right: 8px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.empty-state p {\n  font-size: 14px;\n}\n.tasks-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.task-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 20px;\n  transition: var(--transition);\n}\n.task-card.done {\n  border-color: rgba(34, 197, 94, 0.3);\n}\n.task-card.inprogress {\n  border-color: rgba(56, 189, 248, 0.3);\n}\n.task-card:hover {\n  border-color: var(--border-hover);\n}\n.task-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.room-badge {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.task-desc {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n}\n.task-keeper,\n.task-time {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-bottom: 4px;\n}\n.task-keeper i,\n.task-time i {\n  margin-right: 4px;\n}\n.task-actions {\n  display: flex;\n  gap: 8px;\n  margin-top: 12px;\n  align-items: center;\n}\n/*# sourceMappingURL=housekeeping.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HousekeepingComponent, { className: "HousekeepingComponent", filePath: "app/components/housekeeping/housekeeping.component.ts", lineNumber: 13 });
})();
export {
  HousekeepingComponent
};
//# sourceMappingURL=chunk-AXHF5EP3.js.map
