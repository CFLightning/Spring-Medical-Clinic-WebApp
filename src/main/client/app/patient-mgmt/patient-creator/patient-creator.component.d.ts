import { OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Patient } from "../patient-class";
import { PatientService } from "../patient.service";
import { ActivatedRoute, Router } from "@angular/router";
export declare class PatientCreatorComponent implements OnInit {
    private patientService;
    private route;
    private router;
    currentForm: NgForm;
    currentPatient: Patient;
    submitted: boolean;
    private static createErrorMessage(errorObject);
    constructor(patientService: PatientService, route: ActivatedRoute, router: Router);
    createPatient(): void;
    getErrorMessageOfField(fieldName: string): string;
    isFieldInvalid(fieldName: string): boolean;
    ngOnInit(): void;
}
