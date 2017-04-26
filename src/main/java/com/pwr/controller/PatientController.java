package com.pwr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pwr.model.PatientTO;
import com.pwr.service.IPatientService;

@RestController
@RequestMapping(path = "patient")
//@Transactional - operacje muszą byc na zasadzie transakcji
public class PatientController {

	@Autowired
	private IPatientService patientService;

	@RequestMapping(path = "all", method = RequestMethod.GET)
	public List<PatientTO> findAllPatients() {
		return patientService.findAllPatients();
	}

	//@Transactional na metodzie - tylko jedna metoda jest transakcyjna
	@RequestMapping(path = "create", method = RequestMethod.POST) //Działa POST, dodaje pacjentów do bazy
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
		// nie chcemy udostępniać encji, podajemy TO, Nawet jak mają być takie same
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE) //Działa DELETE, usuwa wybranego pacjenta po ID
	@ResponseBody
	public PatientTO deletePatient(@PathVariable Long id, @RequestBody PatientTO patient)
	{
		patientService.deletePatient(patient);
		return null;
	}

}
