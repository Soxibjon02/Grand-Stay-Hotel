import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-housekeeping',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './housekeeping.component.html',
  styleUrl: './housekeeping.component.scss'
})
export class HousekeepingComponent implements OnInit {
  api         = inject(ApiService);
  tasks       = signal<any[]>([]);
  housekeepers= signal<any[]>([]);
  loading     = signal(true);
  msg         = signal('');
  msgType     = signal<'success'|'danger'>('success');
  selectedKeeper: { [id: number]: number } = {};

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.api.getCleaningTasks().subscribe(t => { this.tasks.set(t||[]); this.loading.set(false); });
    this.api.getHousekeepers().subscribe(k => { this.housekeepers.set(k||[]); });
  }

  start(id: number) {
    const hid = this.selectedKeeper[id];
    this.api.startCleaning(id, hid).subscribe(r => {
      if (r) { this.show(`✅ ${r.message||'Boshlandi'}`,'success'); this.load(); }
      else    this.show('❌ Xato yuz berdi','danger');
    });
  }

  complete(id: number) {
    this.api.completeCleaning(id).subscribe(r => {
      if (r) { this.show(`✅ ${r.message||'Tugallandi'}`,'success'); this.load(); }
      else    this.show('❌ Xato yuz berdi','danger');
    });
  }

  private show(m: string, t: 'success'|'danger') {
    this.msg.set(m); this.msgType.set(t);
    setTimeout(() => this.msg.set(''), 4000);
  }

  statusCss(s: string) {
    if (s==='Done')       return 'status-done';
    if (s==='InProgress') return 'status-inprogress';
    return 'status-pending';
  }
  statusIcon(s: string) {
    if (s==='Done')       return 'bi-check-circle-fill text-success';
    if (s==='InProgress') return 'bi-play-circle-fill text-info';
    return 'bi-clock text-warning';
  }
  fmtDate(d: any) {
    if (!d) return '—';
    try { return new Date(d).toLocaleString('uz-UZ', { day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit' }); }
    catch { return d; }
  }
}
