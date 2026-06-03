import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  api = inject(ApiService);
  router = inject(Router);

  name = '';
  email = '';
  phone = '';
  password = '';
  errorMsg = '';

  register() {
    this.api.register({
      name: this.name, email: this.email, phoneNumber: this.phone, password: this.password
    }).subscribe(res => {
      if (res && res.guestId) {
        localStorage.setItem('guestId', res.guestId.toString());
        localStorage.setItem('guestName', res.user.name);
        this.router.navigate(['/user-dashboard']);
      } else {
        this.errorMsg = res?.message || 'Xatolik yuz berdi';
      }
    });
  }
}
