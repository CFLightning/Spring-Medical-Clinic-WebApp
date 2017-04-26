import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {GeneralModule} from './general/general.module';
import {BookMgmtModule} from './book-mgmt/book-mgmt.module';
import {PatientMgmtModule} from './patient-mgmt/patient-mgmt.module';
import {routing} from './app.routing';
import { PatientService } from './patient-mgmt/patient.service';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [HttpModule, BrowserModule, BookMgmtModule, PatientMgmtModule, GeneralModule, routing, NgbModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [PatientService]
} as NgModule)
export class AppModule {
}
