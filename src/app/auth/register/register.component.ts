import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { country_list } from '../models/countries.list';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countries: string[];
  loading$: Observable<boolean>;
  errorMessage$: Observable<any>;
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.countries = country_list;
    this.registerForm = this.fb.group({
      firstNames: [''],
      lastName: [''],
      gender: [''],
      country: [''],
      mobilePhone: [''],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register() {
    const formValues = this.registerForm.value;
    console.log('Registering with: ', formValues);
    this.authService.signup(formValues);
  }

  logout() {
    this.authService.logout();
  }
}
