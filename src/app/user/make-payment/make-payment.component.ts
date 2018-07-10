import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { takeWhile } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';
import { AuthService } from '../../auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {


  user: firebase.User;
  photoURL$: Observable<any>;
  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: AngularFireStorage
  ) { }
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
    return `You are logged in as, ${this.user.email}`;
  }

  // funding: {
  //   allowed: [paypal.FUNDING.CARD, paypal.FUNDING.CREDIT],
  //   disallowed: []
  // },

  // PayPal Client IDs - replace with your own
  // Create a PayPal app: https://developer.paypal.com/developer/applications/create

  // client: {
  //   sandbox:
  //     'ATS_Q78Kf58O8yffGYRr2jCRqpDm6R1H9wluCbgOeBOcsy12jj2NXARPqU8aWPNp_1ANsaRxNSfAc02s',
  //   production: ''
  // },
  // payment: (data, actions) => {
  //   return actions.payment.create({
  //     payment: {
  //       transactions: [
  //         {
  //           amount: {
  //             total: `5000`,
  //             currency: 'USD'
  //           }
  //         }
  //       ]
  //     }
  //   });
  // },

  // onAuthorize: (data, actions) => {
  //   return actions.payment.execute().then(() => {
  //     this.db.collection('/payments').add({
  //       date: new Date(),
  //       ...data,
  //       amount: 5000
  //     });
  //     window.alert('Payment Complete!');
  //     this.router.navigate(['/user/user-payments']);
  //   });
  // }
}


