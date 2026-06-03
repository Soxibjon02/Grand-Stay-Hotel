import { Component, OnInit, OnDestroy, inject, signal, computed, effect, EffectRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { SignalRService } from '../../services/signalr.service';

interface RoomCard {
  roomNumber: string; floor: number; style: string;
  status: string; cleaning: string; guestName?: string; price: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  api     = inject(ApiService);
  signalR = inject(SignalRService);

  rooms   = signal<RoomCard[]>([]);
  events  = signal<any[]>([]);
  stats   = signal({ availableRooms:0, activeOrders:0, openTickets:0, criticalTickets:0, completedToday:0 });

  selectedFloor = signal<number>(1);

  visibleRooms = computed(() => this.rooms().filter(r => r.floor === this.selectedFloor()));

  floor1 = computed(() => this.rooms().filter(r => r.floor === 1));
  floor2 = computed(() => this.rooms().filter(r => r.floor === 2));

  // Dynamically calculate available rooms based on current rooms data
  availableRoomsCount = computed(() => this.rooms().filter(r => r.status === 'Available' || r.status === 'Bo\'sh').length);

  private effects: EffectRef[] = [];

  constructor() {
    // SignalR → yangi event
    this.effects.push(effect(() => {
      const ev = this.signalR.latestEvent();
      if (!ev) return;
      this.events.update(list => [ev, ...list].slice(0, 50));
    }));

    // SignalR → xona holati o'zgarishi
    this.effects.push(effect(() => {
      const d = this.signalR.latestRoom();
      if (!d) return;
      const num = d.roomNumber || d.RoomNumber;
      this.rooms.update(list => list.map(r =>
        r.roomNumber === num
          ? { ...r, status: d.status || r.status, cleaning: d.cleaning || r.cleaning }
          : r
      ));
    }));

    // SignalR → statistika
    this.effects.push(effect(() => {
      const s = this.signalR.latestStats();
      if (!s) return;
      this.stats.set({
        availableRooms: s.availableRooms ?? s.AvailableRooms ?? 0,
        activeOrders:   s.activeOrders   ?? s.ActiveOrders   ?? 0,
        openTickets:    s.openTickets     ?? s.OpenTickets    ?? 0,
        criticalTickets:s.criticalTickets ?? s.CriticalTickets?? 0,
        completedToday: s.completedToday  ?? s.CompletedToday ?? 0,
      });
    }));
  }

  ngOnInit() {
    this.api.getDashboardState().subscribe(data => {
      if (!data) return;
      const r = (data.rooms || []).map((r: any) => ({
        roomNumber: r.roomNumber || r.RoomNumber,
        floor:   r.floor   || r.Floor   || 1,
        style:   r.style   || r.Style   || '',
        status:  r.status  || r.Status  || 'Available',
        cleaning:r.cleaning|| r.Cleaning|| 'Clean',
        price:   r.price   || r.Price   || 0,
      }));
      this.rooms.set(r);
      this.events.set((data.events || []).slice(0, 50));
      const s = data.stats || {};
      this.stats.set({
        availableRooms: s.availableRooms ?? s.AvailableRooms ?? 0,
        activeOrders:   s.activeOrders   ?? s.ActiveOrders   ?? 0,
        openTickets:    s.openTickets     ?? s.OpenTickets    ?? 0,
        criticalTickets:s.criticalTickets ?? s.CriticalTickets?? 0,
        completedToday: s.completedToday  ?? s.CompletedToday ?? 0,
      });
    });
  }

  ngOnDestroy() { this.effects.forEach(e => e.destroy()); }

  getRealStatus(r: any): string {
    if (r.status === 'NotAvailable') return 'Ta\'mirlash';
    if (r.status === 'BeingServiced' || r.cleaning === 'Dirty' || r.cleaning === 'InProgress') return 'Tozalanmoqda';
    if (r.status === 'Occupied') return 'Joylashgan';
    if (r.status === 'Reserved') return 'Band';
    return 'Bo\'sh';
  }

  getBadgeClass(r: any): string {
    const s = this.getRealStatus(r);
    if (s === 'Ta\'mirlash') return 'status-maintenance';
    if (s === 'Tozalanmoqda') return 'status-cleaning';
    if (s === 'Joylashgan') return 'status-occupied';
    if (s === 'Band') return 'status-reserved';
    return 'status-available';
  }

  roomCss(r: any): string {
    const s = this.getRealStatus(r);
    if (s === 'Ta\'mirlash') return 'room-maintenance';
    if (s === 'Tozalanmoqda') return 'room-cleaning';
    if (s === 'Joylashgan') return 'room-occupied';
    if (s === 'Band') return 'room-reserved';
    return 'room-available';
  }

  roomIcon(status: string, cleaning: string): string {
    if (status === 'Available' && cleaning === 'Clean') return '✅';
    if (status === 'Reserved')      return '📋';
    if (status === 'Occupied')      return '🛌';
    if (status === 'BeingServiced') return '🧹';
    if (status === 'NotAvailable')  return '🔧';
    return '❓';
  }

  fmtTime(d: any): string {
    if (!d) return '';
    try { return new Date(d).toLocaleTimeString('uz-UZ', { hour:'2-digit', minute:'2-digit', second:'2-digit' }); }
    catch { return String(d); }
  }
}
