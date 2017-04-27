import { Patient } from '../patient-class';
import {Component, OnInit} from '@angular/core';
import {PatientService} from '../patient.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {List} from "lodash";

@Component({
  selector: 'patient-overview',
  template: require('./patient-overview.component.html!text'),
  providers: [PatientService]
} as Component)
export class PatientOverviewComponent implements OnInit {
  public currentPatients: Observable<List<Patient>>;

  constructor(private patientService: PatientService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentPatients = this.route.snapshot.data['patients'];
  }

}


