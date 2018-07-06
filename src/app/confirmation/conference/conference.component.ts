import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
// import { Store } from '@ngrx/store';
// import { State } from '../../store/reducers';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['conference.component.css']
})
export class ConferenceComponent implements OnInit {
  selectedEvent$;
  // constructor(private route: ActivatedRoute, private store: Store<State>) {}

  ngOnInit() {
    this.selectedEvent$ = of({
      key: '234.567',
      eventId: 234,
      personId: 567,
      fullName: 'Blessing Marah',
      eventDescription: 'Holy Ghost conference',
      amountPaid: 787,
      status: 'paid'
    });
  }
}
