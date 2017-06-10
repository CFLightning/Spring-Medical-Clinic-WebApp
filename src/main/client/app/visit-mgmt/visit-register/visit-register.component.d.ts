import { OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Visit } from "../visit-class";
import { Doctor } from "../../doctor-mgmt/doctor-class";
import { DoctorService } from "../../doctor-mgmt/doctor.service";
import { PatientService } from "../../patient-mgmt/patient.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Patient } from "../../patient-mgmt/patient-class";
import { VisitService } from "../visit.service";
export declare class VisitRegisterComponent implements OnInit {
    private patientService;
    private doctorService;
    private visitService;
    private route;
    private router;
    currentForm: NgForm;
    currentVisit: Visit;
    doctors: Doctor[];
    patients: Patient[];
    submitted: boolean;
    ngOnInit(): void;
    registerVisit(): void;
    constructor(patientService: PatientService, doctorService: DoctorService, visitService: VisitService, route: ActivatedRoute, router: Router);
}
