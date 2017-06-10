import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Doctor } from "./doctor-class";
import { Observable } from "rxjs/Observable";
import { DoctorService } from "./doctor.service";
export declare class DoctorResolver implements Resolve<Array<Doctor>> {
    private backend;
    constructor(backend: DoctorService);
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Doctor>>;
}
