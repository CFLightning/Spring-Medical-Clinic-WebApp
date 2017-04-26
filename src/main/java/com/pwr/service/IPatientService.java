package com.pwr.service;

import java.util.List;

import com.pwr.model.PatientTO;

public interface IPatientService {

	public List<PatientTO> findAllPatients();

	public void createPatient(PatientTO patient);

	public void updatePatient(PatientTO patient);

	public void deletePatient(PatientTO patient);

}
