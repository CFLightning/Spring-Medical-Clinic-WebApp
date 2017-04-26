import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookOverviewComponent} from './book-mgmt/book-overview/book-overview.component';
import {BookDetailsComponent} from './book-mgmt/book-details/book-details.component';
import {PatientOverviewComponent} from './patient-mgmt/patient-overview/patient-overview.component';
import { PatientResolver } from './patient-mgmt/patient-resolver';

const appRoutes: Routes = [
  {
    path: 'book-mgmt/books',
    component: BookOverviewComponent
  },
  {
    path: 'book-mgmt/book',
    component: BookDetailsComponent
  },
  {
    path: 'book-mgmt/book/:bookId',
    component: BookDetailsComponent
  },
  {
    path: 'patient-mgmt/patients',
    component: PatientOverviewComponent,
    resolve: {
      patients: PatientResolver
    }
  },
  {
    path: 'patient-mgmt/patient',
    component: BookDetailsComponent
  },
  {
    path: '',
    redirectTo: '/book-mgmt/books',
    pathMatch: 'full'
  }
] as Routes;

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
