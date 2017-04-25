import {NgModule} from '@angular/core';
import {PatientOverviewComponent} from './patient-overview/patient-overview.component';
import {PatientService} from './patient.service';
//import {PatientDetailsComponent} from './patient-details/patient-details.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, NgbModule],
  declarations: [PatientOverviewComponent],
  exports: [PatientOverviewComponent],
  providers: [PatientService]
} as NgModule)
export class PatientMgmtModule {
}
