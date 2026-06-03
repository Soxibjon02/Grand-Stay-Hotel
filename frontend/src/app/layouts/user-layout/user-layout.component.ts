import { Component, OnInit, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './user-layout.component.html'
})
export class UserLayoutComponent implements OnInit {
  router = inject(Router);
  isDarkTheme = signal(false);
  isLoggedIn = signal(false);
  guestName = signal('');
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  ngOnInit() {
    this.checkLoginStatus();
    setInterval(() => this.checkLoginStatus(), 1000);
  }

  checkLoginStatus() {
    const gId = localStorage.getItem('guestId');
    const gName = localStorage.getItem('guestName');
    this.isLoggedIn.set(!!gId);
    if (gName) this.guestName.set(gName);
  }

  logout() {
    localStorage.removeItem('guestId');
    localStorage.removeItem('guestName');
    this.isLoggedIn.set(false);
    this.router.navigate(['/']);
  }

  toggleTheme() {
    this.isDarkTheme.set(!this.isDarkTheme());
    if (this.isDarkTheme()) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
