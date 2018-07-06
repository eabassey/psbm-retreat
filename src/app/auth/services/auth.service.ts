import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';
import { switchMap, map, takeWhile } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class AuthService {
  //   user: Observable<firebase.User>;
  currentUser$: Observable<firebase.User>;
  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    // this.user = afAuth.authState;
    this.currentUser$ = afAuth.user;
  }

  signup({ email, password, confirmPassword, ...rest }: any) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('In process of registering.. ', value);
        this.currentUser$
          .pipe(
            switchMap(user => {
              if (user) {
                console.log('To Database for user: ', user);
                return this.db
                  .collection(`/users`)
                  .doc(user.uid)
                  .set({
                    uid: user.uid,
                    email,
                    ...rest
                  });
              }
            })
          )
          .subscribe(() => {
            this.router.navigate(['/user/dashboard']);
            // this.store.dispatch(new fromUI.PageLoaded());
          });
      })
      .catch(err => {
        // this.store.dispatch(new fromUI.ShowError(err.message));
      });
  }

  updateProfile(newProfile: any) {
    this.currentUser$
      .pipe(
        switchMap(user => {
          if (user) {
            console.log('To Database for user: ', user);
            return this.db
              .collection(`/users`)
              .doc(user.uid)
              .update({
                ...newProfile
              });
          }
        })
      )
      .subscribe(() => {
        this.router.navigate(['/user/dashboard']);
      });
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  // get isAuthenticated(): Observable<boolean> {
  //   return this.currentUser$.pipe(map(user => !!user));
  // }

  logout() {
    return this.afAuth.auth.signOut();
  }

  getFullUserData() {
    return this.currentUser$.pipe(
      takeWhile(user => !!user),
      switchMap(user => {
        return this.db
          .collection(`/users`)
          .doc(user.uid)
          .valueChanges();
      })
    );
  }
}
