import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  generateCode() {
    this.router.navigate(['/confirmation/conference']);
  }
}
