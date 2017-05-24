import {Component, OnInit, ViewChild} from "@angular/core";
import {AbstractControl, NgForm, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Doctor} from "../doctor-class";
import {DoctorService} from "../doctor.service";

@Component({
  selector: 'doctor-creator',
  template: require('./doctor-creator.component.html!text'),
  styles: [require('./doctor-creator.component.less!text')]
} as Component)
export class DoctorCreatorComponent implements OnInit {
  @ViewChild('registerForm') currentForm: NgForm;

  currentDoctor: Doctor;

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

  constructor(private doctorService: DoctorService, private route: ActivatedRoute, private router: Router) {
    this.currentDoctor = new Doctor();
    this.submitted = false;
  }

  createDoctor(): void {
    this.submitted = true;
    if (this.currentForm && this.currentForm.form && this.currentForm.form.valid) {
      this.doctorService.createDoctor(this.currentDoctor).subscribe(res => {
        this.router.navigate(['doctor-mgmt/doctors']);
      });
    }
  }

  getErrorMessageOfField(fieldName: string): string {
    if (this.isFieldInvalid(fieldName)) {
      const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
      return DoctorCreatorComponent.createErrorMessage(fieldControl.errors);
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
    return fieldControl && fieldControl.invalid && (fieldControl.touched || this.submitted);
  }

  ngOnInit(): void {

  }
}

