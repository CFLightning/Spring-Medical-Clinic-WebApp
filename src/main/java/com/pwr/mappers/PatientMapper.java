package com.pwr.mappers;

import com.pwr.model.PatientEntity;
import com.pwr.model.PatientTO;

public final class PatientMapper { //Automatyczne mappery
	
	private PatientMapper() {
		
	}
	
	public static PatientTO mapPatient(PatientEntity patientEntity) {
		PatientTO patient = new PatientTO();
		patient.setId(patientEntity.getId());
		patient.setName(patientEntity.getName());
		patient.setSurname(patientEntity.getSurname());
		patient.setPesel(patientEntity.getPesel());
		patient.setEmail(patientEntity.getEmail());
		patient.setPolicyNum(patientEntity.getPolicyNum());
		return patient;
	}

}
