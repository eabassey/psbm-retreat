import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // handleConferencePayment() {
  //   // Render the PayPal button
  //   paypal.Button.render(
  //     {
  //       // Set your environment

  //       env: 'sandbox', // sandbox | production

  //       // Specify the style of the button

  //       style: {
  //         layout: 'vertical', // horizontal | vertical
  //         size: 'medium', // medium | large | responsive
  //         shape: 'rect', // pill | rect
  //         color: 'gold' // gold | blue | silver | black
  //       },

  //       // Specify allowed and disallowed funding sources
  //       //
  //       // Options:
  //       // - paypal.FUNDING.CARD
  //       // - paypal.FUNDING.CREDIT
  //       // - paypal.FUNDING.ELV

  //       funding: {
  //         allowed: [paypal.FUNDING.CARD, paypal.FUNDING.CREDIT],
  //         disallowed: []
  //       },

  //       // PayPal Client IDs - replace with your own
  //       // Create a PayPal app: https://developer.paypal.com/developer/applications/create

  //       client: {
  //         sandbox:
  //           'ATS_Q78Kf58O8yffGYRr2jCRqpDm6R1H9wluCbgOeBOcsy12jj2NXARPqU8aWPNp_1ANsaRxNSfAc02s',
  //         production:
  //           ''
  //       },
  //       payment: (data, actions) => {
  //         return actions.payment.create({
  //           payment: {
  //             transactions: [
  //               {
  //                 amount: {
  //                   total: `5000`,
  //                   currency: 'USD'
  //                 }
  //               }
  //             ]
  //           }
  //         });
  //       },

  //       onAuthorize: (data, actions) => {
  //         return actions.payment.execute().then(() => {
  //           this.db.collection('/payments').add({
  //             date: new Date(),
  //             ...this.currentUserInfo,
  //             ...data,
  //             amount: 5000
  //           });
  //           window.alert('Payment Complete!');
  //           this.router.navigate(['/user/payment-completed']);
  //         });
  //       }
  //     },
  //     '#paypal-button'
  //   );
  // }
}
