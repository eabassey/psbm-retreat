import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { filter, tap, takeWhile, map } from 'rxjs/operators';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  createEventForm: FormGroup;
  currentEvents: any;
  currentUserInfo: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private db: AngularFirestore,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.db
      .collection('/availableEvents')
      .valueChanges()
      .pipe(
        takeWhile(ev => !!ev),
        tap(console.log)
      )
      .subscribe(events => (this.currentEvents = events));

    this.authService
      .getFullUserData()
      .subscribe(info => (this.currentUserInfo = info));

    this.createEventForm = this.fb.group({
      selectedEvent: []
    });
  }

  selectEvent(event) {
    this.createEventForm.get('selectedEvent').setValue(event);
    console.log(`Selected: ${JSON.stringify(event)}`);
  }

  createEvent() {
    // Post to server here..
    console.log({ ...this.currentUserInfo, ...this.createEventForm.value });
    // this.db.collection('/eventRegistrations').add({});
    // this.router.navigate(['/user/user-events']);
  }
}
