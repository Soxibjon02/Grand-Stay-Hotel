import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/user-layout/user-layout.component').then(m => m.UserLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
      { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
      { path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
      { path: 'user-dashboard', loadComponent: () => import('./pages/user-dashboard/user-dashboard.component').then(m => m.UserDashboardComponent) }
    ]
  },
  {
    path: 'admin',
    loadComponent: () => import('./layouts/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'rooms', loadComponent: () => import('./components/rooms/rooms.component').then(m => m.RoomsComponent) },
      { path: 'bookings', loadComponent: () => import('./components/bookings/bookings.component').then(m => m.BookingsComponent) },
      { path: 'housekeeping', loadComponent: () => import('./components/housekeeping/housekeeping.component').then(m => m.HousekeepingComponent) },
      { path: 'room-service', loadComponent: () => import('./components/room-service/room-service.component').then(m => m.RoomServiceComponent) },
      { path: 'maintenance', loadComponent: () => import('./components/maintenance/maintenance.component').then(m => m.MaintenanceComponent) }
    ]
  },
  { path: '**', redirectTo: '' }
];
