import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Doctor} from "./doctor-class";
import {Observable} from "rxjs/Observable";

@Injectable()
export  class  DoctorResolver implements Resolve<Array<Doctor>> {

  constructor(private backend: DoctorService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Doctor>> {
    return this.backend.findAllDoctors();
  }
}
