import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Visit} from "./visit-class";
import {Observable} from "rxjs/Observable";
import {VisitService} from "./visit.service";

@Injectable()
export class VisitResolver implements Resolve<Array<Visit>> {

  constructor(private backend: VisitService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Visit>> {
    return this.backend.findAllVisits(); // TODO: Make visits appear different for doctor and patient invocation
  }
}
