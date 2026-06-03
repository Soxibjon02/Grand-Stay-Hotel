import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
  api   = inject(ApiService);
  rooms = signal<any[]>([]);
  loading = signal(true);

  ngOnInit() { this.load(); }

  load() {
    this.loading.set(true);
    this.api.getRooms().subscribe(r => { this.rooms.set(r || []); this.loading.set(false); });
  }

  statusCss(s: string, c: string) {
    if (s === 'Available' && c === 'Clean') return 'status-available';
    if (s === 'Occupied')      return 'status-occupied';
    if (s === 'Reserved')      return 'status-reserved';
    if (s === 'BeingServiced') return 'status-cleaning';
    if (s === 'NotAvailable')  return 'status-maintenance';
    return 'status-pending';
  }
  statusLabel(s: string, c: string) {
    if (s === 'Available' && c === 'Clean') return 'Bo\'sh';
    if (s === 'Occupied')      return 'Band';
    if (s === 'Reserved')      return 'Bron';
    if (s === 'BeingServiced') return 'Tozalanmoqda';
    if (s === 'NotAvailable')  return 'Mavjud emas';
    return s;
  }
}
