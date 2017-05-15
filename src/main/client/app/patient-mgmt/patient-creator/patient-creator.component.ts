import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'patient-creator',
  template: require('./patient-creator.component.html!text'),
  styles: [require('patient-creator.component.css!text')]
} as Component)
export class PatientCreatorComponent implements OnInit {


  createPatient(): void {
    
  }
}
