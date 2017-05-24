import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Doctor} from "./doctor-class";
import {Http, RequestMethod, RequestOptions, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DoctorService {

  private backEndURL = 'http://localhost:8080/services/doctor/';

  findAllDoctors(): Observable<Doctor[]> {
    return this.http.get(this.backEndURL + 'all')
      .map((res: Response) => {
        return res.json() as Doctor[];
      })
  }

  createDoctor(doctor: Doctor): Observable<any> {
    return this.http.post(this.backEndURL + 'create', doctor);
  }

  deletePatient(doctor: Doctor): Observable<any> {
    let options = new RequestOptions({
      body: doctor,
      method: RequestMethod.Delete
    });
    return this.http.delete(this.backEndURL + 'delete', options);
  }

  constructor(private http: Http) { }
}
