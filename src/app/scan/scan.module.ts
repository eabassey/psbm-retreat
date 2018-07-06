import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { ScannedDetailComponent } from './scanned-detail/scanned-detail.component';
import { ScanService } from './services/scan.service';
import { ScanComponent } from './scan.component';
import { ScanRoutingModule } from './scan.routing';

@NgModule({
  declarations: [ScanComponent, ScannedDetailComponent],
  imports: [BrowserModule, ZXingScannerModule.forRoot(), ScanRoutingModule],
  exports: [ScannedDetailComponent],
  providers: [ScanService]
})
export class ScanModule {}
