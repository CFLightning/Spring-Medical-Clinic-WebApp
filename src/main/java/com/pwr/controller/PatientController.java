package com.pwr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.pwr.model.PatientTO;
import com.pwr.service.IPatientService;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(path = "services/patient")
//@Transactional - operacje muszą byc na zasadzie transakcji
public class PatientController {

	@Autowired
	private IPatientService patientService;

	@ModelAttribute
	public void setVaryResponseHeader(HttpServletResponse response) {
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	}

	//@CrossOrigin - z tym headerem działa w chrome, bez niego nie, proxy nie daje wyników
	@RequestMapping(path = "all", method = RequestMethod.GET)
	public List<PatientTO> findAllPatients() {
		return patientService.findAllPatients();
	}

	//@Transactional na metodzie - tylko jedna metoda jest transakcyjna
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

	@RequestMapping(value = "{id}", method = RequestMethod.OPTIONS) //Działa DELETE, usuwa wybranego pacjenta po ID
	@ResponseBody
	public void deletePatient(@PathVariable Long id, @RequestBody PatientTO patient)
	{
		patientService.deletePatient(patient);
	}

}
