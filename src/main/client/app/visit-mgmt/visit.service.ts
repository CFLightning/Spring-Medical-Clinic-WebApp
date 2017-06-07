import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Visit} from "./visit-class";
@Injectable()
export class VisitService {

  private backEndURL = 'http://localhost:8080/services/visit/'

  findAllVisits(): Observable<Visit[]> {
    return ;
  }

  registerVisit(visit: Visit): Observable<any> {
    return this.http.post(this.backEndURL + 'create', visit);
  }

  constructor(private http: Http) { }
}
