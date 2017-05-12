package com.pwr.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pwr.model.UserEntity;
import com.pwr.repository.UserRepository;

@Service
public class LoginService {

	@Autowired
	private UserRepository userRepository;
	
	//TODO map entity to TO 
	
	public UserEntity findUserEntity() {
		return userRepository.findOne(1L);
	}
	
}
