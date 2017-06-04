import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PatientOverviewComponent} from './patient-mgmt/patient-overview/patient-overview.component';
import {PatientResolver} from './patient-mgmt/patient-resolver';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {PatientCreatorComponent} from "./patient-mgmt/patient-creator/patient-creator.component";
import {DoctorOverviewComponent} from "./doctor-mgmt/doctor-overview/doctor-overview.component";
import {DoctorResolver} from "./doctor-mgmt/doctor-resolver";
import {DoctorCreatorComponent} from "./doctor-mgmt/doctor-creator/doctor-creator.component";
import {VisitRegisterComponent} from "./visit-mgmt/visit-register/visit-register.component";

const appRoutes: Routes = [
  {
    path: 'patient-mgmt/patients',
    component: PatientOverviewComponent,
    resolve: {
      patients: PatientResolver
    }
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'patient-mgmt/patient',
    component: PatientCreatorComponent
  },
  {
    path: 'doctor-mgmt/doctors',
    component: DoctorOverviewComponent,
    resolve: {
      doctors: DoctorResolver
    }
  },
  {
    path: 'doctor-mgmt/doctor',
    component: DoctorCreatorComponent
  },
  {
    path: 'visit-mgmt/register',
    component: VisitRegisterComponent,
    resolve: {
      doctors: DoctorResolver,
      patients: PatientResolver
    }
  },
 // {
   // path: 'calendar',
   // component: CalendarComponent
  //},
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

] as Routes;

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
