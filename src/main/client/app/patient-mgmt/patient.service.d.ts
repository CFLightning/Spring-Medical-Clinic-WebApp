import { Patient } from './patient-class';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export declare class PatientService {
    private http;
    private backEndURL;
    findAllPatients(): Observable<Patient[]>;
    createPatient(patient: Patient): Observable<any>;
    constructor(http: Http);
}
