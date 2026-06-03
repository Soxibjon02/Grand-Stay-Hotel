import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

interface OrderForm {
  roomNumber: string;
  description: string;  // displayed as 'tavsif', sent to backend as 'items'
  priority: string;
}

@Component({
  selector: 'app-room-service',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-service.component.html',
  styleUrl: './room-service.component.scss'
})
export class RoomServiceComponent implements OnInit {
  api     = inject(ApiService);
  orders  = signal<any[]>([]);
  loading = signal(true);
  msg     = signal('');
  msgType = signal<'success'|'danger'>('success');

  form: OrderForm = { roomNumber: '', description: '', priority: 'Oddiy' };

  priorities = [
    { value: 'Oddiy',       label: 'Oddiy',       icon: 'bi-circle',                    cls: 'text-info' },
    { value: "O'rta",       label: "O'rta",       icon: 'bi-dash-circle',               cls: 'text-warning'   },
    { value: 'Shoshilinch', label: 'Shoshilinch', icon: 'bi-exclamation-circle',        cls: 'text-danger'    },
    { value: 'Kritik',      label: 'Kritik',      icon: 'bi-exclamation-triangle-fill', cls: 'text-danger'    },
  ];

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.api.getOrders().subscribe(o => { this.orders.set(o||[]); this.loading.set(false); });
  }

  submit() {
    if (!this.form.roomNumber.trim() || !this.form.description.trim()) {
      this.show('❌ Xona raqami va tavsif majburiy', 'danger'); return;
    }
    // Map frontend form to backend's OrderRequest fields
    const body = {
      roomNumber:  this.form.roomNumber,
      items:       this.form.description,
      totalAmount: 0,
      priority:    this.form.priority
    };
    this.api.createOrder(body).subscribe(r => {
      if (r) {
        this.show(`✅ Buyurtma qabul qilindi — Xona ${this.form.roomNumber}`, 'success');
        this.form = { roomNumber: '', description: '', priority: 'Oddiy' };
        this.load();
      } else {
        this.show('❌ Xato yuz berdi', 'danger');
      }
    });
  }

  nextStatus(id: number) {
    this.api.nextOrderStatus(id).subscribe(r => {
      if (r) { this.show(`✅ Status yangilandi`, 'success'); this.load(); }
      else    this.show('❌ Xato', 'danger');
    });
  }

  private show(m: string, t: 'success'|'danger') {
    this.msg.set(m); this.msgType.set(t);
    setTimeout(() => this.msg.set(''), 4000);
  }

  // OrderStatus: Received, Preparing, Delivering, Delivered, Canceled
  statusCss(s: string) {
    if (s === 'Delivered')                        return 'status-done';
    if (s === 'Preparing' || s === 'Delivering')  return 'status-inprogress';
    if (s === 'Canceled')                         return 'status-danger';
    return 'status-pending'; // Received
  }

  statusLabel(s: string) {
    const map: Record<string, string> = {
      Received:  'Qabul qilindi',
      Preparing: 'Tayyorlanmoqda',
      Delivering:'Yetkazilmoqda',
      Delivered: 'Yetkazildi',
      Canceled:  'Bekor'
    };
    return map[s] ?? s;
  }

  statusIcon(s: string) {
    if (s === 'Delivered')  return 'bi-check-circle-fill';
    if (s === 'Preparing' || s === 'Delivering') return 'bi-play-circle-fill';
    return 'bi-clock';
  }

  priorityInfo(p: string) {
    return this.priorities.find(x => x.value === p) ?? this.priorities[0];
  }

  nextActionLabel(s: string): string | null {
    if (s === 'Received')   return 'Tayyorlash';
    if (s === 'Preparing')  return 'Yetkazmoqda';
    if (s === 'Delivering') return 'Yetkazildi';
    return null;
  }

  isInProgress(s: string) { return s === 'Preparing' || s === 'Delivering'; }

  countByStatus(s: string) {
    return this.orders().filter(o => o.status === s).length;
  }

  fmtDate(d: any) {
    if (!d) return '—';
    try { return new Date(d).toLocaleString('uz-UZ', { day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit' }); }
    catch { return d; }
  }
}
