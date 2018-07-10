import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string;
  errorMessage: any;
  constructor(public authService: AuthService, private router: Router) {}

  resetPassword(email: string) {
    // console.log('Test mail: ', email);
    this.authService
      .resetPassword(email)
      .then(() => this.router.navigate(['/auth/send-confirm']))
      .catch(error => (this.errorMessage = error));
  }
}
