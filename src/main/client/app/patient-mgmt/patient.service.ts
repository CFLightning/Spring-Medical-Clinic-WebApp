import { Patient } from './patient-class';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PatientService {


  findAllPatients(): Observable<Patient[]> {
    return this.http.get('http://localhost:8080/services/patient/all')
      .map((res: Response) => {
        return res.json() as Patient[];
      });
  }

  // createPatient(patient: Patient): Observable<Patient> {
  //     return this.http.post('http://localhost:8080/services/patient/create');
  // }

  constructor(private http: Http) { }
}
