package com.pwr.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pwr.model.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

}
