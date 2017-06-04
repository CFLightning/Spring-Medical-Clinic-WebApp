import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {VisitRegisterComponent} from "./visit-register/visit-register.component";
import {VisitService} from "./visit.service";
import {VisitResolver} from "./visit-resolver";
@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, NgbModule],
  declarations: [VisitRegisterComponent],
  exports: [VisitRegisterComponent],
  providers: [VisitService, VisitResolver]
} as NgModule)

export class VisitMgmtModule {

}
