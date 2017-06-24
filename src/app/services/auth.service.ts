import { Injectable } from '@angular/core';

import {auth} from 'firebase'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  public isLoggedIn: Boolean = false;
  public user_displayName: String = '';
  public user_email: String = '';

  constructor(public af: AngularFireAuth, private router: Router) {
    af.auth.onAuthStateChanged(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['home']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.displayName;
          this.user_email = auth.email;
          this.router.navigate(['home']);
        }
      }
    );
  }

  loginWithGoogle() {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    return this.af.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
    this.af.auth.signOut();
  }

}
