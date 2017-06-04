package com.pwr.model;

import javax.persistence.*;

@Entity
public class VisitEntity {

    @Id
    @GeneratedValue
    public Long id;
    @ManyToOne
    private PatientEntity patient;
    @ManyToOne
    private DoctorEntity doctor;
    @Column
    private Integer hour;
    @Column
    private String date;
    @Column
    private String examination;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId(){
        return id;
    }

    public Integer getHour() {
        return hour;
    }

    public void setHour(Integer hour) {
        this.hour = hour;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getExamination() {
        return examination;
    }

    public void setExamination(String examination) {
        this.examination = examination;
    }

    public PatientEntity getPatient() {
        return patient;
    }

    public void setPatient(PatientEntity patient) {
        this.patient = patient;
    }

    public DoctorEntity getDoctor() {
        return doctor;
    }

    public void setDoctor(DoctorEntity doctor) {
        this.doctor = doctor;
    }
}
