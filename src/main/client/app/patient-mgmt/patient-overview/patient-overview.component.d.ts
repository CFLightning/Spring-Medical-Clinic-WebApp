import { Patient } from '../patient-class';
import { OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';
export declare class PatientOverviewComponent implements OnInit {
    private patientService;
    private route;
    currentPatients: Patient[];
    constructor(patientService: PatientService, route: ActivatedRoute);
    ngOnInit(): void;
    deletePatient(patient: Patient): void;
}
