import { Patient } from './patient-class';
import { PatientService } from './patient.service';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
export declare class PatientResolver implements Resolve<Array<Patient>> {
    private backend;
    constructor(backend: PatientService);
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Patient>>;
}
