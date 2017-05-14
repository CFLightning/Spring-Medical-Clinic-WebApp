package com.pwr.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pwr.model.UserEntity;
import com.pwr.service.LoginService;

@RestController
@RequestMapping(path = "services/login")
public class LoginController {
	
	@Autowired
	private LoginService userService;
	@RequestMapping(path = "", method = RequestMethod.POST)
	public UserEntity finUser(){
		return userService.findUserEntity();	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	@RequestMapping(value = "/loginPage", method = RequestMethod.GET)
//	public ModelAndView loginPage(@RequestParam(value = "error",required = false) String error,
//	@RequestParam(value = "logout",	required = false) String logout) {
//		
//		ModelAndView model = new ModelAndView();
//		if (error != null) {
//			model.addObject("error", "Invalid Credentials provided.");
//		}
//
//		if (logout != null) {
//			model.addObject("message", "Logged out from JournalDEV successfully.");
//		}
//
//		model.setViewName("loginPage");
//		return model;
//	}

}
