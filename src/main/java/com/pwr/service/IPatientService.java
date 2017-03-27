package com.pwr.service;

import java.util.List;

import com.pwr.model.PatientEntity;
import com.pwr.model.PatientTO;

public interface IPatientService {

	public List<PatientTO> findAllPatients();

	public void createPatient(PatientEntity patient);

	public void updatePatient(PatientEntity patient);

	public void deletePatient(PatientEntity patient);

}
