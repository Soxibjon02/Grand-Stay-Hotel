import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  api = inject(ApiService);
  router = inject(Router);

  email = '';
  password = '';
  errorMsg = '';

  login() {
    this.api.login({ email: this.email, password: this.password }).subscribe(res => {
      if (res && res.token) {
        localStorage.setItem('guestId', res.token);
        localStorage.setItem('guestName', res.user.name);
        
        if (res.user.role === 'Admin') {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/user-dashboard']);
        }
      } else {
        this.errorMsg = res?.message || 'Xatolik yuz berdi. Email yoki parol xato.';
      }
    });
  }
}
