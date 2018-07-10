import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-payments',
  templateUrl: './user-payments.component.html',
  styleUrls: ['./user-payments.component.css']
})
export class UserPaymentsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  generateCode() {
    this.router.navigate(['/confirmation/conference']);
  }
}
