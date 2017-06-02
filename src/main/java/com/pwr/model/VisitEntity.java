package com.pwr.model;

import javax.persistence.*;

@Entity
public class VisitEntity {

    @Id
    @GeneratedValue
    public Long id;
    @Column
    @ManyToOne
    private PatientTO patient;
    @Column
    @ManyToOne
    private DoctorTO doctor;
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

    public PatientTO getPatient() {
        return patient;
    }

    public void setPatient(PatientTO patient) {
        this.patient = patient;
    }

    public DoctorTO getDoctor() {
        return doctor;
    }

    public void setDoctor(DoctorTO doctor) {
        this.doctor = doctor;
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

}
