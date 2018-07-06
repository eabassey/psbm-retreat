import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation.component';
import { ConferenceComponent } from './conference/conference.component';
import { ConferenceGuard } from './services/conference.guard';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationComponent,
    children: [
      {
        path: 'conference',
        component: ConferenceComponent,
        canActivate: [ConferenceGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmationRoutingModule {}
