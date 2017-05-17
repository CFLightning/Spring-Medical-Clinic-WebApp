import { Patient } from './patient-class';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {RequestOptions} from "http";

@Injectable()
export class PatientService {

  private backEndURL = 'http://localhost:8080/services/patient';

  findAllPatients(): Observable<Patient[]> {
    return this.http.get(this.backEndURL + '/all')
      .map((res: Response) => {
        return res.json() as Patient[];
      });
  }

  createPatient(patient: Patient): void {
    let body = JSON.stringify(patient);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post(this.backEndURL + '/create', body, options)
      .map((res:Response) => {
        return res.json() as Patient[];
      });
      //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

 // deletePatient(id: number): any {
  //  console.log("button click");
  //  return this.http.delete('http://localhost:8080/services/patient/' + id);
 // }

  constructor(private http: Http) { }
}
