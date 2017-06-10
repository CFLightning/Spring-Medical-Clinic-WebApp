import { OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Doctor } from "../doctor-class";
import { DoctorService } from "../doctor.service";
export declare class DoctorCreatorComponent implements OnInit {
    private doctorService;
    private route;
    private router;
    currentForm: NgForm;
    currentDoctor: Doctor;
    submitted: boolean;
    private static createErrorMessage(errorObject);
    constructor(doctorService: DoctorService, route: ActivatedRoute, router: Router);
    createDoctor(): void;
    getErrorMessageOfField(fieldName: string): string;
    isFieldInvalid(fieldName: string): boolean;
    ngOnInit(): void;
}
