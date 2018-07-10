import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-user-payments',
  templateUrl: './user-payments.component.html',
  styleUrls: ['./user-payments.component.css']
})
export class UserPaymentsComponent implements OnInit {

  user: firebase.User;
  photoURL$: Observable<any>;
  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: AngularFireStorage
  ) { }
  ngOnInit() {
    this.authService.currentUser$
      .pipe(
        takeWhile(user => !!user)
        // tap(
        //   user => (this.photoURL$ = this.storage.ref(user.uid).getDownloadURL())
        // )
      )
      .subscribe(user => (this.user = user));
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/pages']);
  }

  isOnline(): boolean {
    return true;
  }

  welcomeUser() {
    return `You are logged in as, ${this.user.email}`;
  }
}