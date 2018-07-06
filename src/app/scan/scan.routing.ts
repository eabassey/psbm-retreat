import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ScanComponent } from './scan.component';

const routes: Routes = [
  {
    path: '',
    component: ScanComponent,
    canActivate: [AuthGuard]
    // children: [
    //   { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanRoutingModule {}
