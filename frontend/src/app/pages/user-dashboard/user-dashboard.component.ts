import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-dashboard.component.html'
})
export class UserDashboardComponent implements OnInit {
  api = inject(ApiService);
  router = inject(Router);

  guestName = '';
  guestId = 0;
  
  availableRooms = signal<any[]>([]);
  myBookings = signal<any[]>([]);

  selectedFloor = signal<string>('all');
  filteredRooms = computed(() => {
    const rooms = this.availableRooms();
    const floor = this.selectedFloor();
    if (floor === 'all') return rooms;
    return rooms.filter(r => r.floor.toString() === floor);
  });
  
  selectedRoomToBook = signal<any | null>(null);
  bookingDays = signal<number>(1);
  bookingMsg = '';

  selectedRoomForIssue = signal<string | null>(null);
  issueText = '';
  issuePriority = 'Oddiy';
  issueTarget = 'RoomService';
  issueMsg = '';

  ngOnInit() {
    const gId = localStorage.getItem('guestId');
    const gName = localStorage.getItem('guestName');
    if (!gId) { this.router.navigate(['/login']); return; }
    
    this.guestId = parseInt(gId, 10);
    this.guestName = gName || 'Mehmon';

    this.loadData();
  }

  loadData() {
    this.api.getAvailableRooms().subscribe(rooms => this.availableRooms.set(rooms || []));
    this.api.getMyBookings(this.guestId).subscribe(b => this.myBookings.set(b || []));
  }

  setFloor(f: string) { this.selectedFloor.set(f); }

  openBookingForm(r: any) {
    this.selectedRoomToBook.set(r);
    this.bookingDays.set(1);
    this.bookingMsg = '';
  }
  cancelBooking() { this.selectedRoomToBook.set(null); }

  confirmBooking() {
    const r = this.selectedRoomToBook();
    if (!r) return;
    this.api.bookRoom({ guestId: this.guestId, roomNumber: r.roomNumber, durationInDays: this.bookingDays() })
      .subscribe(res => {
        if (res && res.message) {
          this.bookingMsg = res.message;
          this.selectedRoomToBook.set(null);
          this.loadData();
        } else {
          this.bookingMsg = 'Xatolik yuz berdi yoki xona band qilingan';
        }
        setTimeout(() => this.bookingMsg = '', 3000);
      });
  }

  openIssueForm(roomNumber: string) {
    this.selectedRoomForIssue.set(roomNumber);
    this.issueText = '';
    this.issueMsg = '';
  }
  cancelIssue() { this.selectedRoomForIssue.set(null); }

  reportIssue() {
    if (!this.issueText.trim() || !this.selectedRoomForIssue()) return;
    this.api.reportIssue({ 
      guestId: this.guestId, 
      roomNumber: this.selectedRoomForIssue(), 
      issue: this.issueText,
      priority: this.issuePriority,
      target: this.issueTarget
    })
      .subscribe(res => {
        this.issueMsg = res?.message || 'Yuborildi';
        this.issueText = '';
        setTimeout(() => { this.issueMsg = ''; this.selectedRoomForIssue.set(null); }, 3000);
      });
  }
}
