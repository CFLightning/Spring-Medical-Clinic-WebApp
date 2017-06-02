import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
@Injectable()
export class VisitService {

  private backEndURL = 'http://localhost:8080/services/visit/'

  constructor(private http: Http) { }
}
