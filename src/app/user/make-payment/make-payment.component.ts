import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {

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
