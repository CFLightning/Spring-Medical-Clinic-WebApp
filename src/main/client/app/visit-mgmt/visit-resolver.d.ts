import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Visit } from "./visit-class";
import { Observable } from "rxjs/Observable";
import { VisitService } from "./visit.service";
export declare class VisitResolver implements Resolve<Array<Visit>> {
    private backend;
    constructor(backend: VisitService);
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Visit>>;
}
