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
  ngOnInit () {
let isloggedin: string;
let loggedUser:string;
isloggedin = localStorage.getItem('isloggedIn') !;
loggedUser = localStorage.getItem('loggedUser') !;
if (isloggedin!="true" || !loggedUser)
this.router.navigate(['/login']);
else
this.auth.setLoggedUserFromLocalStorage(loggedUser);
}
}
