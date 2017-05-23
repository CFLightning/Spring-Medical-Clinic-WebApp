import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PatientOverviewComponent} from './patient-mgmt/patient-overview/patient-overview.component';
import {PatientResolver} from './patient-mgmt/patient-resolver';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {PatientCreatorComponent} from "./patient-mgmt/patient-creator/patient-creator.component";

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
