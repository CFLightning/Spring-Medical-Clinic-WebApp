package com.pwr.mappers;

import com.pwr.model.PatientEntity;
import com.pwr.model.PatientTO;

public final class PatientTOMapper {

	private PatientTOMapper() {
		
	}
	
	public static PatientEntity mapPatientTO(PatientTO patientUpdate) {
		PatientEntity patient = new PatientEntity();
		patient.setName(patientUpdate.getName());
		patient.setSurname(patientUpdate.getSurname());
		return patient;
	}
}
