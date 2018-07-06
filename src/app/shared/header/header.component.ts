import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { takeWhile, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: firebase.User;
  photoURL$: Observable<any>;
  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

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
    return `Hi, ${this.user.email}`;
  }

  // get userEmail(): Observable<string> {

  // }
}
