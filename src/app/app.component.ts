import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { takeWhile, switchMap, map } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
    // this.authService
    //   .getFullUserData()
    //   .subscribe(u => console.log('Checking vvv in firestore user: ', u));
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/pages']);
  }

  isOnline(): boolean {
    return true;
  }
}
