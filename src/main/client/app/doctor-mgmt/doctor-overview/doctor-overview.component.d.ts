import { OnInit } from "@angular/core";
import { DoctorService } from "../doctor.service";
import { Doctor } from "../doctor-class";
import { ActivatedRoute } from "@angular/router";
export declare class DoctorOverviewComponent implements OnInit {
    private doctorService;
    private route;
    currentDoctors: Doctor[];
    constructor(doctorService: DoctorService, route: ActivatedRoute);
    ngOnInit(): void;
    deleteDoctor(doctor: Doctor): void;
}
