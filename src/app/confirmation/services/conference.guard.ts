import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from '@angular/router';
import { Observable, of } from 'rxjs';
// import { Store } from '@ngrx/store';
// import { State } from '../../store/reducers';

@Injectable()
export class ConferenceGuard implements CanActivate {
  // constructor(private store: Store<State>) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // const canView$ = this.store.select(
    //   appState => appState.payment.paidForConference
    // );
    // return canView$;
    return of(true);
  }
}
