import {Component, OnInit} from '@angular/core';
import {PatientService, Patient} from '../patient.service';

@Component({
  selector: 'patient-overview',
  template: require('./patient-overview.component.html!text')
} as Component)
export class PatientOverviewComponent implements OnInit {
  public currentPatients: Patient[];

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.findAllPatients()
      .map((currentPatients: Array<any>) => {
        let result: Array<Patient> = [];
        if (currentPatients) {
          currentPatients.forEach((pat) => {
            result.push(new Patient(pat.id, pat.name, pat.surname));
          });
          }
          return result;
       })
      .subscribe(currentPatients => this.currentPatients = currentPatients);
    // this.currentPatients = this.patientService.findAllPatients();
  }

  thereArePatientsToDisplay(): boolean {
    return this.currentPatients && this.currentPatients.length > 0;
  }
}

