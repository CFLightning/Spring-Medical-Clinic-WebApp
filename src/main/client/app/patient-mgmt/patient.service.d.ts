import { Patient } from './patient-class';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export declare class PatientService {
    private http;
    findAllPatients(): Observable<Patient[]>;
    createPatient(name: string): Promise<Patient[]>;
    constructor(http: Http);
}
