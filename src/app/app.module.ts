import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthService} from "./services/auth.service";

import {AngularFireAuth} from "angularfire2/auth/auth";
import { AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyCh3RLL8aMjbzhN6opGczuYeehG_e8Z1UU",
  authDomain: "web-app-auth-1fba0.firebaseapp.com",
  databaseURL: "https://web-app-auth-1fba0.firebaseio.com",
  projectId: "web-app-auth-1fba0",
  storageBucket: "web-app-auth-1fba0.appspot.com",
  messagingSenderId: "1011108876881"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [AuthService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
