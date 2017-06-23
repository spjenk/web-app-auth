import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {AngularFireAuth} from "angularfire2/auth/auth";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  providers: [AngularFireAuth],
  declarations: [LoginComponent]
})
export class LoginModule { }
