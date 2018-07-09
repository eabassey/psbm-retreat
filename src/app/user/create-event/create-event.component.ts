import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { filter, tap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  createEventForm: FormGroup;
  currentEvents: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.db
      .collection('/availableEvents')
      .valueChanges()
      .pipe(
        takeWhile(ev => !!ev),
        tap(console.log)
      ).subscribe(events => this.currentEvents = events);
    this.createEventForm = this.fb.group({
      selectedEvent: ['']
    });
  }

  selectEvent(event) {
    console.log(`Selected: ${JSON.stringify(event)}`);
  }

  createEvent() {
    // Post to server here..
    this.router.navigate(['/user/user-events']);
  }
}
