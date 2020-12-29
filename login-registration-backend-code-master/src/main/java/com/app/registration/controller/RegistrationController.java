package com.app.registration.controller;
import java.io.Console;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.registration.model.User;
import com.app.registration.service.RegistrationService;
import com.app.registration.service.SecurityTokenGenerator;

@RestController
public class RegistrationController {
	
	@Autowired
	private RegistrationService service;
	
	@Autowired
	private SecurityTokenGenerator tokenGenerator;
	
	@GetMapping("/")
	public String welcome() {
		return "accessed";
		
	}
	
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins = "http://localhost:4200")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getEmailId();
		if(tempEmailId != null && !"".equals(tempEmailId)) {
			User userobj = service.fetchUserByEmailId(tempEmailId);
			if (userobj != null){
				throw new Exception("user with "+tempEmailId+" is already exist");
			}
		}
		
		User userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
	
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<?>loginUser(@RequestBody User user) throws Exception {
		String tempEmailId  = user.getEmailId();
		String tempPass = user.getPassword();
 		User userObj = null;
 		System.out.println(tempEmailId + tempPass);
		if (tempEmailId != null && tempPass != null) {
//			Log.i(tempEmailId + tempPass);
			userObj = service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
			
			
		}
		
		if(userObj == null) {
			throw new Exception("bad Credentials");
			
		}else {
		//System.out.println(user);
		Map<String,String> map=tokenGenerator.generateToken(userObj);
		map.put("userName", userObj.getUserName());
		map.put("email",userObj.getEmailId());
		map.put("id",String.valueOf(userObj.getId()));
		return new ResponseEntity<Map<String,String>>(map,HttpStatus.OK);
		//return userObj;
	}
		
	}
	

}
