package com.pwr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pwr.service.IDoctorService;
import com.pwr.model.DoctorTO;

@RestController
@RequestMapping(path = "doctor")
public class DoctorController {
	
	@Autowired
	private IDoctorService doctorService;
	
	@RequestMapping(path = "all", method = RequestMethod.GET)
	public List<DoctorTO> findAllDoctors() {
		return doctorService.findAllDoctors();
	}
	
}
