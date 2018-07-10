import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PagesComponent, HomeComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
  providers: []
})
export class PagesModule {}
