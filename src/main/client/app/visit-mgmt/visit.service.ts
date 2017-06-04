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

  constructor(private http: Http) { }
}
