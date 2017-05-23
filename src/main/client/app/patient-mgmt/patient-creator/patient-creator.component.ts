import {Component, OnInit, ViewChild} from "@angular/core";
import {AbstractControl, NgForm, ReactiveFormsModule} from "@angular/forms";
import {Patient} from "../patient-class";
import {PatientService} from "../patient.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'patient-creator',
  template: require('./patient-creator.component.html!text')
} as Component)
export class PatientCreatorComponent implements OnInit {
  @ViewChild('registerForm') currentForm: NgForm;

  currentPatient: Patient;

  submitted: boolean;

  private static createErrorMessage(errorObject: {[key: string]: any }): string {
    if(errorObject) {
      for(let errorCode in errorObject) {
        if(errorObject.hasOwnProperty(errorCode)) {
          switch (errorCode) {
            case 'required':
              return 'Please provide missing value';
            case  'maxlength':
              return 'The value is too long';
            default:
              return 'The value is wrong';
          }
        }
      }
    }
  }

  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router) {
    this.currentPatient = new Patient();
    this.submitted = false;
  }

  createPatient(): void {
    this.submitted = true;
    if (this.currentForm && this.currentForm.form && this.currentForm.form.valid) {
      this.patientService.createPatient(this.currentPatient).subscribe(res => {
        console.log("asd");
        this.router.navigate(['patient-mgmt/patients']);
      });
    }
  }

  getErrorMessageOfField(fieldName: string): string {
    if (this.isFieldInvalid(fieldName)) {
      const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
      return PatientCreatorComponent.createErrorMessage(fieldControl.errors);
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
    return fieldControl && fieldControl.invalid && (fieldControl.touched || this.submitted);
  }

  ngOnInit(): void {

  }
}

