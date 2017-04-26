import {Component, OnInit} from '@angular/core';
import {PatientService, Patient} from '../patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'patient-overview',
  template: require('./patient-overview.component.html!text')
} as Component)
export class PatientOverviewComponent implements OnInit {
  public currentPatients: Array<Patient>;

  constructor(private patientService: PatientService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentPatients = this.route.snapshot.data['patients'];
  }

}


