import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  template: require('./login.component.html!text')
} as Component)
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}

