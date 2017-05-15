import { Patient } from '../patient-class';
import { OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
export declare class PatientOverviewComponent implements OnInit {
    private patientService;
    private route;
    currentPatients: Observable<Patient[]>;
    constructor(patientService: PatientService, route: ActivatedRoute);
    ngOnInit(): void;
    deletePatient(id: number): void;
}
