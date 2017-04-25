import {Component, OnInit} from '@angular/core';
import {PatientService, Patient} from '../patient.service';

@Component({
  selector: 'patient-overview',
  template: require('./patient-overview.component.html!text')
} as Component)
export class PatientOverviewComponent implements OnInit {
  public currentPatients: Promise<Patient[]>;

  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
    /*this.patientService.findAllPatients()
      .map((currentPatients: Array<any>) => {
        let result: Array<Patient> = [];
        if (currentPatients) {
          currentPatients.forEach((pat) => {
            result.push(new Patient(pat.id, pat.name, pat.surname));
          });
          }
          return result;
       })
      .subscribe(data => this.currentPatients = data);
    // this.currentPatients = this.patientService.findAllPatients();
    }*/
    this.currentPatients = this.patientService.findAllPatients();
  }

  // thereArePatientsToDisplay(): boolean {
  //  return this.currentPatients && this.currentPatients.length > 0;
  // }
}

