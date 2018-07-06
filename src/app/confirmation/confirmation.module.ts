import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation.component';
import { ConfirmationRoutingModule } from './confirmation.routing';
import { ConferenceComponent } from './conference/conference.component';
import { ConferenceGuard } from './services/conference.guard';

import { NgxKjuaModule } from 'ngx-kjua';

@NgModule({
  declarations: [ConfirmationComponent, ConferenceComponent],
  imports: [CommonModule, ConfirmationRoutingModule, NgxKjuaModule],
  providers: [ConferenceGuard]
})
export class ConfirmationModule {}
