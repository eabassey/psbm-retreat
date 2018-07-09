import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  // encapsulation: ViewEncapsulation.Native
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  errorMessage$: Observable<any>;
  loginForm: FormGroup;
  constructor(
    public authService: AuthService,
    private router: Router,
    private db: AngularFirestore,
    private deviceService: DeviceDetectorService,
    private fb: FormBuilder
  ) { }

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
        // Store user login timestamp and env for audit
        // this.db
        //   .collection(`/users`)
        //   .doc(value.user.uid)
        //   .collection('/logins')
        //   .add({
        //     timestamp: value.user.metadata.lastSignInTime,
        //     browser: this.deviceService.browser,
        //     browserVersion: this.deviceService.browser_version,
        //     os: this.deviceService.os,
        //     userAgent: this.deviceService.userAgent,
        //     ua: this.deviceService.ua
        //   });

        // Get full user data
        // this.authService
        //   .getFullUserData()
        //   .subscribe(u => console.log('Checking login user: ', u));

        // On successful login redirect to user dashboard
        this.router.navigate(['/user/dashboard']);
        this.email = this.password = '';
      })
      .catch(error => (this.errorMessage$ = error));
  }

  logout() {
    this.authService.logout();
  }
}
