import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PatientService {
  private patients: Patient[] = [];
  // private sequencer: number = 1; // wykomentowałem, bo mamy id randomvalue w springu

  findAllPatients(): Patient[] {
    this.http.get('http://localhost:8080/patient/all')
      .map((res: Response) => res.json())
      .subscribe(
        data => this.patients = data,
        err => this.errorMsg(err),
        () => console.log('Patients fetch complete'),
      );
    return this.patients;
  }
  errorMsg(err: any) {
    console.error('Error: ' + err);
  }
  constructor (private http: Http) {}
}

export class Patient {
  private _id: number;
  private _name: string;
  private _surname: string;

  constructor(ids?: number, names?: string, surnames?: string) {
    this._id = ids;
    this._name = names;
    this._surname = surnames;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  set id(value: number) {
    this._id = value;
  }

  set name(value: string) {
    this._name = value;
  }

  set surname(value: string) {
    this._surname = value;
  }
}
