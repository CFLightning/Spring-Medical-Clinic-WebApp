package com.pwr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pwr.service.IDoctorService;
import com.pwr.model.DoctorTO;
import com.pwr.model.DoctorEntity;

@RestController
@RequestMapping(path = "doctor")
public class DoctorController {
	
	@Autowired
	private IDoctorService doctorService;
	
	@RequestMapping(path = "all", method = RequestMethod.GET)
	public List<DoctorTO> findAllDoctors() {
		return doctorService.findAllDoctors();
	}
	
	@RequestMapping(path = "create", method = RequestMethod.POST) //Działa POST, dodaje lekarzy do bazy
	public DoctorEntity createDoctor(@RequestBody DoctorEntity doctor) {
		doctorService.createDoctor(doctor);
		return doctor;

	}
	
	@RequestMapping(value = "{id}", method = RequestMethod.PUT) //Działa PUT, zmienia dane wybranego lekarza po ID
	@ResponseBody
	public DoctorTO updateDoctor(@PathVariable Long id, @RequestBody DoctorTO doctor)
	{
		doctorService.updateDoctor(doctor);
		return doctor;
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE) //Działa DELETE, usuwa wybranego lekarza po ID
	@ResponseBody
	public DoctorEntity deleteDoctor(@PathVariable DoctorEntity id)
	{
		doctorService.deleteDoctor(id);
		return null;
	}
	
}
