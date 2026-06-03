import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

interface TicketForm {
  roomNumber: string;
  category: string;
  description: string;
  priority: number;
}

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent implements OnInit {
  api       = inject(ApiService);
  tickets   = signal<any[]>([]);
  loading   = signal(true);
  msg       = signal('');
  msgType   = signal<'success'|'danger'>('success');
  filterStatus = signal<string>('all');

  // Default priority = 2 (Normal), values match backend TicketPriority enum (Low=1..Critical=4)
  form: TicketForm = { roomNumber: '', category: 'Plumbing', description: '', priority: 2 };

  categories = ['Plumbing', 'Electrical', 'HVAC', 'Furniture', 'Cleaning', 'Security', 'Other'];

  // Values 1-4 match backend TicketPriority enum
  priorities = [
    { value: 1, label: 'Past',     icon: 'bi-arrow-down-circle',          cls: 'text-success' },
    { value: 2, label: "O'rta",    icon: 'bi-dash-circle',                cls: 'text-info'    },
    { value: 3, label: 'Yuqori',   icon: 'bi-arrow-up-circle',            cls: 'text-warning' },
    { value: 4, label: 'Kritik',   icon: 'bi-exclamation-triangle-fill',  cls: 'text-danger'  },
  ];

  filtered = computed(() => {
    const s = this.filterStatus();
    if (s === 'all') return this.tickets();
    return this.tickets().filter(t => t.status === s);
  });

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.api.getTickets().subscribe(t => { this.tickets.set(t||[]); this.loading.set(false); });
  }

  submit() {
    if (!this.form.roomNumber.trim() || !this.form.description.trim()) {
      this.show('❌ Xona raqami va tavsif majburiy', 'danger'); return;
    }
    this.api.createTicket(this.form).subscribe(r => {
      if (r) {
        this.show(`✅ Ticket yaratildi — Xona ${this.form.roomNumber}`, 'success');
        this.form = { roomNumber: '', category: 'Plumbing', description: '', priority: 2 };
        this.load();
      } else {
        this.show('❌ Xato yuz berdi', 'danger');
      }
    });
  }

  complete(id: number) {
    this.api.completeTicket(id).subscribe(r => {
      if (r) { this.show('✅ Ticket yopildi', 'success'); this.load(); }
      else    this.show('❌ Xato', 'danger');
    });
  }

  private show(m: string, t: 'success'|'danger') {
    this.msg.set(m); this.msgType.set(t);
    setTimeout(() => this.msg.set(''), 4000);
  }

  // TicketStatus: Pending, Queued, Assigned, InProgress, Completed, Canceled
  statusCss(s: string) {
    if (s === 'Completed')               return 'status-done';
    if (s === 'InProgress' || s === 'Assigned') return 'status-inprogress';
    return 'status-pending';
  }

  statusLabel(s: string) {
    const map: Record<string, string> = {
      Pending: 'Kutilmoqda', Queued: 'Navbatda', Assigned: 'Tayinlandi',
      InProgress: 'Bajarilmoqda', Completed: 'Bajarildi', Canceled: 'Bekor'
    };
    return map[s] ?? s;
  }

  canComplete(status: string) {
    return status !== 'Completed' && status !== 'Canceled';
  }

  priorityInfo(p: number) {
    return this.priorities.find(x => x.value === p) ?? this.priorities[1];
  }

  countByStatus(s: string) {
    return s === 'all' ? this.tickets().length : this.tickets().filter(t => t.status === s).length;
  }

  fmtDate(d: any) {
    if (!d) return '—';
    try { return new Date(d).toLocaleString('uz-UZ', { day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit' }); }
    catch { return d; }
  }
}
