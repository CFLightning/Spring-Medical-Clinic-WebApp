import { Patient } from "../patient-mgmt/patient-class";
import { Doctor } from "../doctor-mgmt/doctor-class";
export declare class Visit {
    id: number;
    patient: Patient;
    doctor: Doctor;
    hour: number;
    date: string;
    examination: string;
    constructor(ids?: number, patients?: Patient, doctors?: Doctor, hours?: number, dates?: string, examinations?: string);
}
