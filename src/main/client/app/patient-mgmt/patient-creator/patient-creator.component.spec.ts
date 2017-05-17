import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {PatientCreatorComponent} from "./patient-creator.component";
import {PatientService} from "../patient.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Type} from "@angular/core";
import {Observable} from "rxjs/Observable";


describe('PatientCreatorComponent', function () {
  let fixture: ComponentFixture<PatientCreatorComponent>;
  let instance: PatientCreatorComponent;

  class ActivatedRouteMock {
    params = new Observable<Params>();
  }

  class RouterMock {
    navigate(): void {
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [PatientCreatorComponent],
      providers: [
        PatientService,
        {provide: ActivatedRoute, useClass: ActivatedRouteMock},
        {provide: Router, useClass: RouterMock}
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(PatientCreatorComponent as Type<PatientCreatorComponent>);
      instance = fixture.componentInstance;
    });
  }));

  it('is instantiated', () => {
    expect(instance instanceof PatientCreatorComponent).toBe(true, 'should create PatientCreatorComponent');
  });
});
