import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { takeWhile, switchMap, map } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private db: AngularFirestore) {}

  ngOnInit() {
    // this.authService
    //   .getFullUserData()
    //   .subscribe(u => console.log('Checking vvv in firestore user: ', u));
  }
}
