package com.pwr.service;

import java.util.List;

import com.pwr.model.DoctorTO;

public interface IDoctorService {

	public List<DoctorTO> findAllDoctors();
	
	public void createDoctor(DoctorTO doctor);

	public void updateDoctor(DoctorTO doctor);

	public void deleteDoctor(DoctorTO doctor);
}
