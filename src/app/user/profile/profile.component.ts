import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { country_list } from '../../auth/models/countries.list';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { switchMap, tap, takeWhile, take } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  countries: string[];
  user: firebase.User;
  userInfo: any;
  gender = ['Male', 'Female'];
  photoURL$: Observable<any>;
  uploadProgress: Observable<number>;
  profileForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.afAuth.user
      .pipe(
        takeWhile(user => !!user),
        switchMap(user => {
          return this.db
            .collection('/users')
            .doc(user.uid)
            .valueChanges();
        }),
        take(1),
        tap(console.log)
        // tap(
        //   user => (this.photoURL$ = this.storage.ref(user.uid).getDownloadURL())
        // )
      )
      .subscribe(userInfo => {
        this.userInfo = userInfo;
        console.log('Checking userinfo for date: ', userInfo);
        this.initializeForm(userInfo);
      });

    this.countries = country_list;
  }

  initializeForm(
    value: any = {
      firstNames: '',
      lastName: '',
      gender: '',
      country: '',
      idNumber: '',
      mobileNumber: ''
    }
  ) {
    const ts = value.dateOfBirth as firebase.firestore.Timestamp;
    this.profileForm = this.fb.group({
      firstNames: value.firstNames,
      lastName: value.lastName,
      gender: value.gender,
      country: value.country,
      idNumber: value.idNumber,
      mobilePhone: value.mobilePhone
    });
  }

  updateProfile() {
    const formValues = this.profileForm.value;
    this.authService.updateProfile(formValues);
  }

  uploadFile(event) {
    console.log('Loading pic..');
    const file = event.target.files[0];
    const filePath = `${this.userInfo.uid}`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    this.uploadProgress = task.percentageChanges();
  }
}
