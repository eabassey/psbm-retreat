import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-welcome-header',
  templateUrl: './welcome-header.component.html',
  styleUrls: ['./welcome-header.component.css']
})
export class WelcomeHeaderComponent implements OnInit {
  lastLogin: string;
  user: firebase.User;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser$
      .pipe(takeWhile(user => !!user))
      .subscribe(user => {
        this.user = user;
        this.lastLogin = user.metadata.lastSignInTime;
      });
  }
}
