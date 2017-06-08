package com.pwr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.pwr.service.IDoctorService;
import com.pwr.model.DoctorTO;

import javax.transaction.Transactional;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RequestMapping(path = "services/doctor")
@Transactional
public class DoctorController {
	
	@Autowired
	private IDoctorService doctorService;

	@PreAuthorize("#oauth2.hasScope('read')")
	@RequestMapping(path = "all", method = RequestMethod.GET)
	public List<DoctorTO> findAllDoctors() {
		return doctorService.findAllDoctors();
	}

	@PreAuthorize("#oauth2.hasScope('read')")
	@RequestMapping(path = "create", method = RequestMethod.POST) //Działa POST, dodaje lekarzy do bazy
	public DoctorTO createDoctor(@RequestBody DoctorTO doctor) 
	{
		doctorService.createDoctor(doctor);
		return doctor;

	}

	@PreAuthorize("#oauth2.hasScope('read')")
	@RequestMapping(value = "{id}", method = RequestMethod.PUT) //Działa PUT, zmienia dane wybranego lekarza po ID
	@ResponseBody
	public DoctorTO updateDoctor(@PathVariable Long id, @RequestBody DoctorTO doctor)
	{
		doctorService.updateDoctor(doctor);
		return doctor;
	}

	@RequestMapping(path = "delete", method = RequestMethod.DELETE) //Działa DELETE, usuwa wybranego lekarza po ID
	@ResponseBody
	public void deleteDoctor(@RequestBody DoctorTO doctor)
	{
		doctorService.deleteDoctor(doctor);
	}
	
}
