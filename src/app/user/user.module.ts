import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import { ProfileComponent } from './profile/profile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { UserPaymentsComponent } from './user-payments/user-payments.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { WelcomeHeaderComponent } from './welcome-header/welcome-header.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { CreateEventComponent } from './create-event/create-event.component';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule, ButtonModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    UserDashboardComponent,
    UserEventsComponent,
    UserPaymentsComponent,
    MakePaymentComponent,
    WelcomeHeaderComponent,
    CreateEventComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    DropDownsModule,
    DateInputsModule,
    InputsModule,
    ButtonModule,
    ButtonsModule
  ],
  providers: []
})
export class UserModule {}
