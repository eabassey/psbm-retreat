import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  createEventForm: FormGroup;
  currentEvents = ['Holy Ghost Conference', 'A touch from Above'];
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.createEventForm = this.fb.group({
      selectedEvent: ['']
    });
  }

  createEvent() {
    // Post to server here..
    this.router.navigate(['/user/user-events']);
  }
}
