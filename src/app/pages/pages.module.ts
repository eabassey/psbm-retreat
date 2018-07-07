import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { InternationalVisitorsProgramComponent } from './international-visitors-program/international-visitors-program.component';
// import { NgComponent } from './ng/ng.component';
// import { PropheticSchoolMinistryComponent } from './prophetic-school-ministry/prophetic-school-ministry.component';
// import { SheperdBushiriFoundationComponent } from './sheperd-bushiri-foundation/sheperd-bushiri-foundation.component';
// import { ConferencesandseminarsComponent } from './conferencesandseminars/conferencesandseminars.component';
// import { TelevisionMinistryComponent } from './television-ministry/television-ministry.component';
// import { PartnershipComponent } from './partnership/partnership.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
// import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [PagesComponent, HomeComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
  providers: []
})
export class PagesModule {}
