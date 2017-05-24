package com.pwr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.pwr.model.PatientTO;
import com.pwr.service.IPatientService;

import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RequestMapping(path = "services/patient")
@Transactional // - operacje muszą byc na zasadzie transakcji
public class PatientController {

	@Autowired
	private IPatientService patientService;

	@RequestMapping(path = "all", method = RequestMethod.GET)
	public List<PatientTO> findAllPatients() {
		return patientService.findAllPatients();
	}

	@RequestMapping(path = "create", method = RequestMethod.POST)
	public PatientTO createPatient(@RequestBody PatientTO patient)
	{
		patientService.createPatient(patient);
		return patient;

	}
	@RequestMapping(value = "{id}", method = RequestMethod.PUT) //Działa PUT, zmienia dane wybranego pacjenta po ID
	@ResponseBody
	public PatientTO updatePatient(@PathVariable Long id, @RequestBody PatientTO patient)
	{
		patientService.updatePatient(patient); //nie podajemy id w URL 
		return patient; //lista doktorów, wybierasz doktora w Angularze, podać PUT ENCJĘ nie id
	}

	@RequestMapping(path = "delete", method = RequestMethod.DELETE) //Działa DELETE, usuwa wybranego pacjenta po ID
	@ResponseBody
	public void deletePatient(@RequestBody PatientTO patient)
	{
		patientService.deletePatient(patient);
	}

}
