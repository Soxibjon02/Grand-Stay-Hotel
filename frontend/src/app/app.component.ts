import { Component, OnInit, inject, computed, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignalRService } from './services/signalr.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  signalR = inject(SignalRService);

  isDarkTheme = signal(false);

  connectionIcon = computed(() => {
    const s = this.signalR.connectionState();
    if (s === 'connected')   return { icon: 'bi-circle-fill', cls: 'text-success', label: 'Real-Time Ulandi' };
    if (s === 'connecting')  return { icon: 'bi-arrow-repeat', cls: 'text-warning', label: 'Ulanmoqda...' };
    return { icon: 'bi-circle', cls: 'text-danger', label: 'Uzildi' };
  });

  navItems = [
    { path: '/dashboard',    icon: 'bi-grid-1x2-fill',    label: 'Dashboard'      },
    { path: '/rooms',        icon: 'bi-building',          label: 'Xonalar'        },
    { path: '/bookings',     icon: 'bi-calendar-check',    label: 'Bronlar'        },
    { path: '/housekeeping', icon: 'bi-stars',             label: 'Tozalash'       },
    { path: '/room-service', icon: 'bi-bag-check',         label: 'Xona Xizmati'  },
    { path: '/maintenance',  icon: 'bi-tools',             label: "Ta'mirlash"     },
  ];

  ngOnInit() { 
    this.signalR.connect(); 
    
    // Theme initialization
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkTheme.set(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
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
