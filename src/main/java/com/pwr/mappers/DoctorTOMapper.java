package com.pwr.mappers;

import com.pwr.model.DoctorEntity;
import com.pwr.model.DoctorTO;

public final class DoctorTOMapper {

	private DoctorTOMapper() {
		
	}
	
	public static DoctorEntity mapDoctorTO(DoctorTO doctorUpdate) {
		DoctorEntity doctor = new DoctorEntity();
		doctor.setId(doctorUpdate.getId());
		doctor.setName(doctorUpdate.getName());
		doctor.setSurname(doctorUpdate.getSurname());
		doctor.setPesel(doctorUpdate.getPesel());
		doctor.setEmail(doctorUpdate.getEmail());
		return doctor;
	}
}
