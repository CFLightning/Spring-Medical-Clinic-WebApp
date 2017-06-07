import {Component, OnInit, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Visit} from "../visit-class";
import {Doctor} from "../../doctor-mgmt/doctor-class";
import {DoctorService} from "../../doctor-mgmt/doctor.service";
import {PatientService} from "../../patient-mgmt/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Patient} from "../../patient-mgmt/patient-class";
import {VisitService} from "../visit.service";

@Component({
  selector: 'visit-register',
  template: require('./visit-register.component.html!text')
} as Component)

export class VisitRegisterComponent implements OnInit {
  @ViewChild('registerForm') currentForm: NgForm;

  currentVisit: Visit;
  doctors: Doctor[];
  patients: Patient[];
  submitted: boolean;

  ngOnInit(): void {
     this.doctors = this.route.snapshot.data['doctors'];
     this.patients = this.route.snapshot.data['patients'];
  }

  registerVisit(): void {
    this.submitted = true;
    if (this.currentForm && this.currentForm.form && this.currentForm.form.valid) {
      this.visitService.registerVisit(this.currentVisit).subscribe(res => {
        //this.router.navigate(['patient-mgmt/patients']);
      });
    }
  }

  constructor(private patientService: PatientService, private doctorService: DoctorService, private visitService: VisitService, private route: ActivatedRoute, private router: Router) {
    this.currentVisit = new Visit();
    this.submitted = false;
  }
}
