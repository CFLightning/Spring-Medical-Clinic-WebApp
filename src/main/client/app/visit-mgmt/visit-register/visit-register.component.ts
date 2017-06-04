import {Component, OnInit, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Visit} from "../visit-class";
import {Doctor} from "../../doctor-mgmt/doctor-class";
import {DoctorService} from "../../doctor-mgmt/doctor.service";
import {PatientService} from "../../patient-mgmt/patient.service";
import {ActivatedRoute} from "@angular/router";
import {Patient} from "../../patient-mgmt/patient-class";

@Component({
  selector: 'visit-register',
  template: require('./visit-register.component.html!text')
} as Component)

export class VisitRegisterComponent implements OnInit {
  @ViewChild('registerForm') currentForm: NgForm;

  currentVisit: Visit;
  doctors: Doctor[];
  patients: Patient[];

  ngOnInit(): void {
     this.doctors = this.route.snapshot.data['doctors'];
     this.patients = this.route.snapshot.data['patients'];
  }

  constructor(private patientService: PatientService, private doctorService: DoctorService, private route: ActivatedRoute) {
    this.currentVisit = new Visit();
  }
}
