import { Patient, PatientService } from './patient.service';
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class PatientResolver implements Resolve<Array<Patient>> {

  constructor(private backend: PatientService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Patient>> {
    return this.backend.findAllPatients();
  }
}
