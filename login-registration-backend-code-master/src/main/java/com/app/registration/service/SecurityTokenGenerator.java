package com.app.registration.service;

import java.util.Map;

import com.app.registration.model.User;



public interface SecurityTokenGenerator {
	
	Map<String,String> generateToken(User user);
}
