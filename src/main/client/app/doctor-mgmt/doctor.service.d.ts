import { Observable } from "rxjs/Observable";
import { Doctor } from "./doctor-class";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
export declare class DoctorService {
    private http;
    private backEndURL;
    findAllDoctors(): Observable<Doctor[]>;
    createDoctor(doctor: Doctor): Observable<any>;
    deleteDoctor(doctor: Doctor): Observable<any>;
    constructor(http: Http);
}
