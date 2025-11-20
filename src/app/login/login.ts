import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styles: ``,
})
export class Login implements OnInit {
  user = new User();
  erreur = 0;
  err: number = 0;
  constructor(private auth: Auth, private router: Router) { }

  ngOnInit() {
  }

  onLoggedin() {
    this.auth.login(this.user).subscribe({
      next: (data) => {
        let jwToken = data.headers.get('Authorization')!;
        this.auth.saveToken(jwToken);
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        this.err = 1;
      }
    });
  }
}
