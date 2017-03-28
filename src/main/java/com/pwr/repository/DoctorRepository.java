package com.pwr.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pwr.model.DoctorEntity;

public interface DoctorRepository extends JpaRepository<DoctorEntity, Long> {

}
