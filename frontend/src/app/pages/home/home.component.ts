import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  router = inject(Router);

  ngOnInit() {
    if (localStorage.getItem('guestId')) {
      this.router.navigate(['/user-dashboard']);
    }
  }
}
