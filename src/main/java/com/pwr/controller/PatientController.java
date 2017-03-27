package com.pwr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.pwr.model.PatientEntity;
import com.pwr.model.PatientTO;
import com.pwr.service.IPatientService;

@RestController
@RequestMapping(path = "patient")
public class PatientController {

	@Autowired
	private IPatientService patientService;

	@RequestMapping(path = "all", method = RequestMethod.GET)
	public List<PatientTO> findAllPatients() {
		return patientService.findAllPatients();
	}

	@RequestMapping(path = "create", method = RequestMethod.POST) //Działa POST, dodaje pacjentów do bazy
	public PatientEntity createPatient(@RequestBody PatientEntity patient) {
		patientService.createPatient(patient);
		return patient;

	}
	@RequestMapping(value = "{id}", method = RequestMethod.PUT) //Działa PUT, zmienia dane wybranego pacjenta po ID
	@ResponseBody
	public PatientEntity updatePatient(@PathVariable Long id, @RequestBody PatientEntity patient)
	{
		patient.setId(id);
		patientService.updatePatient(patient);
		return patient;
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE) //Działa DELETE, usuwa wybranego pacjenta po ID
	@ResponseBody
	public PatientEntity deletePatient(@PathVariable PatientEntity id)
	{
		patientService.deletePatient(id);
		return null;
	}

}
