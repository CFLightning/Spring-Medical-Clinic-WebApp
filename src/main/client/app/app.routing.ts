import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookOverviewComponent} from './book-mgmt/book-overview/book-overview.component';
import {BookDetailsComponent} from './book-mgmt/book-details/book-details.component';
import {PatientOverviewComponent} from './patient-mgmt/patient-overview/patient-overview.component';
import { PatientResolver } from './patient-mgmt/patient-resolver';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'patient-mgmt/patients',
    component: PatientOverviewComponent,
    resolve: {
      patients: PatientResolver
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'patient-mgmt/patient',
    component: BookDetailsComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
] as Routes;

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
