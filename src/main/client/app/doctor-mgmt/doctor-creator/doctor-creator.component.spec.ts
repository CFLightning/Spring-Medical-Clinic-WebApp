import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Type} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {DoctorCreatorComponent} from "./doctor-creator.component";
import {DoctorService} from "../doctor.service";


describe('DoctorCreatorComponent', function () {
  let fixture: ComponentFixture<DoctorCreatorComponent>;
  let instance: DoctorCreatorComponent;

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
      declarations: [DoctorCreatorComponent],
      providers: [
        DoctorService,
        {provide: ActivatedRoute, useClass: ActivatedRouteMock},
        {provide: Router, useClass: RouterMock}
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(DoctorCreatorComponent as Type<DoctorCreatorComponent>);
      instance = fixture.componentInstance;
    });
  }));

  it('is instantiated', () => {
    expect(instance instanceof DoctorCreatorComponent).toBe(true, 'should create DoctorCreatorComponent');
  });
});
