import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {Cookie} from "../cookie";
import {Http, Response} from '@angular/http';
import {Token} from "../token";
import {Router} from "@angular/router";
import 'rxjs/add/operator/catch';
import {User} from "./user-class";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'login',
  template: require('./login.component.html!text'),
  // providers: [LoginService]
}as Component)

export class LoginComponent {
  @ViewChild('loginForm') currentForm: NgForm;

  currentUser: User;

  submitted: boolean;

  constructor(private http: Http, private router: Router) {
    this.currentUser = new User();
    this.submitted = false;
  }

  public getToken(): void {
    Token.getToken(this.currentUser.username, this.currentUser.password, this.http)
      .catch(() => {
        console.log('error');
        return null;
      })
      .subscribe((res: Response) => {
        Cookie.set('access_token', res.json().access_token);
        this.router.navigate(['/patient-mgmt/patient']);
      });
  }
}
