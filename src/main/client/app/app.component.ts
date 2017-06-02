import {Component, ViewEncapsulation} from '@angular/core';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app',
  directives: [LoginComponent],
  template: '<app-nav></app-nav><router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None //Globalne style, font
} as Component)
export class AppComponent {
}
