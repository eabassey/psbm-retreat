import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { InternationalVisitorsProgramComponent } from './international-visitors-program/international-visitors-program.component';
// import { PartnershipComponent } from './partnership/partnership.component';
// import { PropheticSchoolMinistryComponent } from './prophetic-school-ministry/prophetic-school-ministry.component';
// import { SheperdBushiriFoundationComponent } from './sheperd-bushiri-foundation/sheperd-bushiri-foundation.component';
// import { TelevisionMinistryComponent } from './television-ministry/television-ministry.component';
// import { ConferencesandseminarsComponent } from './conferencesandseminars/conferencesandseminars.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'prefix' },
      { path: 'home', component: HomeComponent },
      // { path: 'about', component: AboutComponent },
      // { path: 'contact', component: ContactComponent },
      // { path: 'international', component: InternationalVisitorsProgramComponent },
      // { path: 'partnership', component: PartnershipComponent },
      // { path: 'prophetic-school', component: PropheticSchoolMinistryComponent },
      // { path: 'sbfoundation', component: SheperdBushiriFoundationComponent },
      // { path: 'tvministry', component: TelevisionMinistryComponent },
      // { path: 'conferences', component: ConferencesandseminarsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
