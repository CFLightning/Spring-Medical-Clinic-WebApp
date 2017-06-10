import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Visit } from "./visit-class";
export declare class VisitService {
    private http;
    private backEndURL;
    findAllVisits(): Observable<Visit[]>;
    registerVisit(visit: Visit): Observable<any>;
    constructor(http: Http);
}
