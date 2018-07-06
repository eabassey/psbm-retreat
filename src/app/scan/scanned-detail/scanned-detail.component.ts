import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ScanService } from '../services/scan.service';
@Component({
  selector: 'app-scanned-detail',
  templateUrl: './scanned-detail.component.html',
  styleUrls: ['./scanned-detail.component.css']
})
export class ScannedDetailComponent implements OnInit {
  event$: Observable<any>;

  // constructor(private scanService: ScanService, private store: Store<any>) {}

  ngOnInit() {
    this.event$ = from([
      {
        eventId: 234,
        personId: 567,
        fullName: 'Blessing Marah',
        eventDescription: 'Holy Ghost conference',
        amountPaid: 787,
        status: 'paid'
      }
    ]);
  }

  resetDetails() {
    // this.store.dispatch(new ResetDetails());
  }
}
