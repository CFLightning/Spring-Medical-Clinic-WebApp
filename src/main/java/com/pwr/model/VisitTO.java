package com.pwr.model;

public class VisitTO {

    private Long id;
    private PatientTO patient;
    private DoctorTO doctor;
    private Integer hour;
    private String date;
    private String examination;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
