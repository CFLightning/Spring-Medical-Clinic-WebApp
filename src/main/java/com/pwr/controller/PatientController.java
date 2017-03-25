package com.pwr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
	
	@RequestMapping(path = "create", method = RequestMethod.POST) //tutaj post? powinno przyjąc JSON i dodać do repo, konieczna metoda post?
	public void createPatient() {
		patientService.createPatient();
	}

	/*public String createPatient(@ModelAttribute PatientTO patient) {
		return "result";
	}*/
}
