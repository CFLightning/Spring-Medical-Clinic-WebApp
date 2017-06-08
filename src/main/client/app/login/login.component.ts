import {Component, Injectable, OnInit} from '@angular/core';
import {Cookie} from "../cookie";
import {Http, Response} from '@angular/http';
import {Token} from "../token";
import {Router} from "@angular/router";
import 'rxjs/add/operator/catch';

@Component({
  selector: 'login',
  template: require('./login.component.html!text'),
  // providers: [LoginService]
}as Component)

export class LoginComponent implements OnInit {

  constructor(private http: Http, private router: Router) {
  }

  public getToken(): void {
    Token.getToken('admin', 'admin', this.http)
      .catch(() => {
        console.log('exc');
        return null;
      })
      .subscribe((res: Response) => {
        Cookie.set('access_token', res.json().access_token);
        this.router.navigate(['/patient-mgmt/patient']);
      });
  }

  ngOnInit(): void {
    console.log("TEST");
  }
}




