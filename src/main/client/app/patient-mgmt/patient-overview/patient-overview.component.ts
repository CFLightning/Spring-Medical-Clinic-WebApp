import {Patient} from '../patient-class';
import {Component, OnInit} from '@angular/core';
import {PatientService} from '../patient.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'patient-overview',
  template: require('./patient-overview.component.html!text'),
  providers: [PatientService]
} as Component)
export class PatientOverviewComponent implements OnInit {
  public currentPatients: Patient[];

  constructor(private patientService: PatientService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentPatients = this.route.snapshot.data['patients'];
  }

  deletePatient(patient: Patient): void {
    this.patientService.deletePatient(patient)
      .subscribe(res => {
        this.currentPatients.splice(this.currentPatients.indexOf(patient), 1);
      });
  }
}


