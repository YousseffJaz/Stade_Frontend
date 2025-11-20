import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('MesStades');
  constructor(public auth: Auth, private router: Router) { }
  onLogout() {
    this.auth.logout();
  }
  ngOnInit() {
    this.auth.loadToken();
    if (this.auth.getToken() == null || this.auth.isTokenExpired())
        this.router.navigate(['/login']);
  }
}
