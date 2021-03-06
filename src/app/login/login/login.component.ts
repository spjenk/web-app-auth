import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginGoogle() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    })
  }

  loginFacebook() {
    this.authService.loginWithFacebook().then((data) => {
      this.router.navigate(['']);
    })
  }

}
