import { Patient } from './patient-class';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PatientService {

  private backEndURL = 'http://localhost:8080/services/patient';

  findAllPatients(): Observable<Patient[]> {
    return this.http.get(this.backEndURL + '/all')
      .map((res: Response) => {
        return res.json() as Patient[];
      });
  }

  createPatient(patient: Patient):Observable<any> {
    return this.http.post(this.backEndURL + '/create', patient);
  }

 // deletePatient(id: number): any {
  //  console.log("button click");
  //  return this.http.delete('http://localhost:8080/services/patient/' + id);
 // }

  constructor(private http: Http) { }
}
