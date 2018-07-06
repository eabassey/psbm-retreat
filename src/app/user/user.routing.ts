import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UserEventsComponent } from './user-events/user-events.component';
import { UserPaymentsComponent } from './user-payments/user-payments.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { CreateEventComponent } from './create-event/create-event.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'create-event', component: CreateEventComponent },
      { path: 'user-events', component: UserEventsComponent },
      { path: 'user-payments', component: UserPaymentsComponent },
      { path: 'make-payment', component: MakePaymentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
