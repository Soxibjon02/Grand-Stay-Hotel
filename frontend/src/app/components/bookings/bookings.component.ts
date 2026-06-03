import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent implements OnInit {
  api      = inject(ApiService);
  bookings = signal<any[]>([]);
  loading  = signal(true);
  ciMsg    = signal('');
  coMsg    = signal('');
  ciType   = signal<'success'|'danger'>('success');
  coType   = signal<'success'|'danger'>('success');

  ci = { guestName:'', roomStyle:0, floorPreference:'', durationInDays:1, advancePayment:0, specificRoomNumber:'' };
  co = { roomNumber:'', discountCode:'' };

  styleNames = ['Standard','Deluxe','FamilySuite','BusinessSuite'];

  ngOnInit() { this.loadBookings(); }

  loadBookings() {
    this.loading.set(true);
    this.api.getBookings().subscribe(r => { this.bookings.set(r||[]); this.loading.set(false); });
  }

  doCheckIn() {
    if (!this.ci.guestName.trim()) { this.showCiMsg('Mehmon ismini kiriting!','danger'); return; }
    if (this.ci.durationInDays < 1){ this.showCiMsg('Muddat kamida 1 kun!','danger'); return; }
    this.api.checkIn({
      guestName: this.ci.guestName,
      roomStyle: this.ci.roomStyle,
      floorPreference: this.ci.floorPreference ? +this.ci.floorPreference : null,
      durationInDays: this.ci.durationInDays,
      advancePayment: this.ci.advancePayment,
      proximity: 0,
      specificRoomNumber: this.ci.specificRoomNumber.trim() ? this.ci.specificRoomNumber.trim() : null
    }).subscribe(r => {
      if (r) { 
        this.showCiMsg(`✅ Check-in! Xona: ${r.roomNumber || ''}`, 'success'); 
        this.ci.specificRoomNumber = ''; // clear input on success
        this.loadBookings(); 
      }
      else    this.showCiMsg('❌ Bo\'sh xona topilmadi yoki xato yuz berdi.','danger');
    });
  }

  doCheckOut() {
    if (!/^\d{3}$/.test(this.co.roomNumber)) { this.showCoMsg('3 raqamli xona raqami kiriting!','danger'); return; }
    this.api.checkOut({ roomNumber: this.co.roomNumber, discountCode: this.co.discountCode||null })
      .subscribe(r => {
        if (r) { this.showCoMsg(`✅ Checkout! Jami: $${r.totalAmount||0}`, 'success'); this.loadBookings(); }
        else    this.showCoMsg('❌ Bu xonada faol mehmon topilmadi.','danger');
      });
  }

  cancelBooking(id: number) {
    if (!confirm('Bronni bekor qilasizmi?')) return;
    this.api.cancelBooking(id).subscribe(r => {
      if (r) { alert(`✅ ${r.message}`); this.loadBookings(); }
    });
  }

  confirmBooking(id: number) {
    if (!confirm('Ushbu bronni tasdiqlab, xonaga joylashtirasizmi (To\'lov qabul qilindimi)?')) return;
    this.api.confirmBooking(id).subscribe(r => {
      if (r) { alert(`✅ ${r.message}`); this.loadBookings(); }
    });
  }

  quickCheckout(roomNumber: string) {
    if (!confirm(`${roomNumber}-xonadan checkout qilinsinmi?`)) return;
    this.api.checkOut({ roomNumber }).subscribe(r => {
      if (r) { alert(`✅ Checkout! Jami: $${r.totalAmount||0}`); this.loadBookings(); }
    });
  }

  private showCiMsg(msg: string, type: 'success'|'danger') {
    this.ciMsg.set(msg); this.ciType.set(type);
    setTimeout(() => this.ciMsg.set(''), 4000);
  }
  private showCoMsg(msg: string, type: 'success'|'danger') {
    this.coMsg.set(msg); this.coType.set(type);
    setTimeout(() => this.coMsg.set(''), 4000);
  }

  statusLabel(s: string): string {
    const m: any = { Confirmed:'Tasdiqlangan', CheckedIn:'Joylashgan',
      CheckedOut:'Chiqqan', Canceled:'Bekor', Pending:'Kutmoqda' };
    return m[s] || s;
  }
  statusCss(s: string): string {
    const m: any = { Confirmed:'status-reserved', CheckedIn:'status-available',
      CheckedOut:'status-pending', Canceled:'status-maintenance', Pending:'status-pending' };
    return m[s] || 'status-pending';
  }
  fmtDate(d: any) {
    if (!d) return '—';
    try { return new Date(d).toLocaleDateString('uz-UZ', { day:'2-digit', month:'2-digit', year:'2-digit' }); }
    catch { return d; }
  }
}
