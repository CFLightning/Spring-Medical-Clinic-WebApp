package com.pwr.service;

import java.util.List;

import com.pwr.model.DoctorTO;
import com.pwr.model.DoctorEntity;

public interface IDoctorService {

	public List<DoctorTO> findAllDoctors();
	
	public void createDoctor(DoctorEntity doctor);

	public void updateDoctor(DoctorTO doctor);

	public void deleteDoctor(DoctorEntity doctor);
}
