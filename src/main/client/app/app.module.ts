import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {GeneralModule} from './general/general.module';
import {BookMgmtModule} from './book-mgmt/book-mgmt.module';
import {PatientMgmtModule} from './patient-mgmt/patient-mgmt.module';
import {routing} from './app.routing';
import {PatientService} from './patient-mgmt/patient.service';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginModule} from './login/login.module';
import {CanActivateViaOAuthGuard} from './_guard/oAuth.guard';
import {HomeModule} from './home/home.module';
import {FormsModule} from "@angular/forms";
import {DoctorMgmtModule} from "./doctor-mgmt/doctor-mgmt.module";
import {VisitMgmtModule} from "./visit-mgmt/visit-mgmt.module";
import {DoctorService} from "./doctor-mgmt/doctor.service";

@NgModule({
  imports: [HttpModule, FormsModule, BrowserModule, HttpModule, HomeModule, LoginModule, DoctorMgmtModule, PatientMgmtModule, VisitMgmtModule, GeneralModule, routing, NgbModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [PatientService, CanActivateViaOAuthGuard, DoctorService]
} as NgModule)
export class AppModule {
}
