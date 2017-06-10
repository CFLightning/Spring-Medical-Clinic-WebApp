import { Patient } from './patient-class';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
export declare class PatientService {
    private http;
    private backEndURL;
    findAllPatients(): Observable<Patient[]>;
    createPatient(patient: Patient): Observable<any>;
    deletePatient(patient: Patient): Observable<any>;
    constructor(http: Http);
}
