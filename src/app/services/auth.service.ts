import { Injectable } from '@angular/core';

import {auth} from 'firebase'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(public af: AngularFireAuth) {

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

  isAuthenticated() {
    return this.af.auth != null;
  }

}
