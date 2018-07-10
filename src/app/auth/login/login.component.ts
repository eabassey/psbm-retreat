import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  errorMessage$: Observable<any>;
  loginForm: FormGroup;
  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .then(value => {
        // On successful login redirect to user dashboard
        this.router.navigate(['/pages/home']);
        this.email = this.password = '';
      })
      .catch(error => (this.errorMessage$ = error));
  }

  logout() {
    this.authService.logout();
  }
}
