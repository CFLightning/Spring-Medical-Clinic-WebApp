package com.pwr.mappers;

import com.pwr.model.DoctorEntity;
import com.pwr.model.DoctorTO;

public final class DoctorMapper {

	private DoctorMapper(){
		
	}
	
	public static DoctorTO mapDoctor(DoctorEntity doctorEntity) {
		DoctorTO doctor = new DoctorTO();
		doctor.setId(doctorEntity.getId());
		doctor.setName(doctorEntity.getName());
		doctor.setSurname(doctorEntity.getSurname());
		doctor.setEmail(doctorEntity.getEmail());
		return doctor;
	}
	
}
