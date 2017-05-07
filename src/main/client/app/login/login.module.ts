import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, NgbModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: []
} as NgModule)
export class LoginModule {
}
