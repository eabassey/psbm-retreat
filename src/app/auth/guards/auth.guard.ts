import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.authService.currentUser$.pipe(
      map(auth => {
        if (!auth) {
          this.router.navigate(['/pages/home']);
        }
        return !!auth;
      })
    );
  }
}
