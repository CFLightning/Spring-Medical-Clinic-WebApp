import {NgModule} from '@angular/core';
import {DoctorOverviewComponent} from './doctor-overview/doctor-overview.component';
import {DoctorResolver} from './doctor-resolver';
import {DoctorService} from './doctor.service';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DoctorCreatorComponent} from "./doctor-creator/doctor-creator.component";

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, NgbModule],
  declarations: [DoctorOverviewComponent, DoctorCreatorComponent],
  exports: [DoctorOverviewComponent, DoctorCreatorComponent],
  providers: [DoctorService, DoctorResolver]
} as NgModule)
export class DoctorMgmtModule {
}
