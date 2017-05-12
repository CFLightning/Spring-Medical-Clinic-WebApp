import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'login',
  template: require('./login.component.html!text'),
  providers: [LoginService]
}as Component)


export class LoginComponent implements OnInit {

  constructor(public router: Router, private loginService: LoginService) {
  }

  login(event, username, password) {
    event.preventDefault();
    this.loginService.login(username, password)
      .subscribe(
        response => {
          console.log(response.data);
          localStorage.setItem('token', response.access_token);
          this.router.navigateByUrl('/home');
        },
        error => {
          alert(error);
        }
      );
  }
  ngOnInit(): void {}
}




