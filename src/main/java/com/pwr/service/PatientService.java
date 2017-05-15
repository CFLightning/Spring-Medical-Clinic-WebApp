package com.pwr.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.pwr.mappers.PatientMapper;
import com.pwr.mappers.PatientTOMapper;
import com.pwr.model.PatientEntity;
import com.pwr.model.PatientTO;
import com.pwr.repository.PatientRepository;

@Service
public class PatientService implements IPatientService {
	
	@Autowired
	private PatientRepository patientRepository;

	
	@Override
	public List<PatientTO> findAllPatients() {
		List<PatientTO> result = new ArrayList<>();
		patientRepository.findAll().forEach(patientEntity -> result.add(PatientMapper.mapPatient(patientEntity)));
		return result;
	}
	
	@Override
	public void createPatient(PatientTO patient) {
		PatientEntity patientCreate = PatientTOMapper.mapPatientTO(patient);
		patientRepository.save(patientCreate);
	}

	@Override
	public void updatePatient(PatientTO patient) {
		PatientEntity patientUpdate = PatientTOMapper.mapPatientTO(patient);
		patientRepository.save(patientUpdate);

	}
	
	@Override
	public void deletePatient(PatientTO patient){
		PatientEntity patientDelete = PatientTOMapper.mapPatientTO(patient);
		patientRepository.delete(patientDelete);

	}
}
