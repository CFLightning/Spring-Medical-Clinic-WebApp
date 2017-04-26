import { Patient } from './patient-class';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PatientService {

  findAllPatients(): Observable<Patient[]> {
    return this.http.get('http://localhost:8080/patient/all')
      .map((res: Response) => res.json().data as Patient[]);
  }

 createPatient(name: string): Promise<Patient[]> {
      let headers = new Headers();
      return this.http
      .post('http://localhost:8080/patient/create', JSON.stringify({name: name}), {headers: headers})
      .toPromise()
      .then(response => response.json().data as Patient[]);
  }
  constructor(private http: Http) { }
}
