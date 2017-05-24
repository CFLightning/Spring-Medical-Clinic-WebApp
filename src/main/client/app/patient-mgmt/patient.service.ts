import { Patient } from './patient-class';
import { Injectable } from '@angular/core';
import {Http, RequestMethod, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PatientService {

  private backEndURL = 'http://localhost:8080/services/patient/';

  findAllPatients(): Observable<Patient[]> {
    return this.http.get(this.backEndURL + 'all')
      .map((res: Response) => {
        return res.json() as Patient[];
      });
  }

  createPatient(patient: Patient): Observable<any> {
    return this.http.post(this.backEndURL + 'create', patient);
  }

  deletePatient(patient: Patient): Observable<any> {
    let options = new RequestOptions({
        body: patient,
        method: RequestMethod.Delete
    });
    return this.http.delete(this.backEndURL + 'delete', options);
  }

  constructor(private http: Http) { }
}
