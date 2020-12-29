package com.app.registration.controllertest;

import java.util.*;

import org.apache.catalina.startup.ClassLoaderFactory.Repository;
import org.aspectj.lang.annotation.Before;
import org.junit.*;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.mockito.*;
import static org.mockito.Mockito.*;
import org.springframework.http.MediaType;

import com.app.registration.RegistrationApplication;
import com.app.registration.controller.RegistrationController;
import com.app.registration.model.User;
import com.app.registration.service.RegistrationService;
import com.app.registration.service.SecurityTokenGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest

@ContextConfiguration(classes=RegistrationApplication.class)
@RunWith(SpringRunner.class)
@WebMvcTest(RegistrationController.class)
public class UserControllerTest {
	@Autowired
	private MockMvc mockMVC;
	@MockBean
	private RegistrationService userService;
	@MockBean
	private SecurityTokenGenerator securityTokenGenerator;
	@InjectMocks
	private RegistrationController userController;
	private User user;
	
	@SuppressWarnings("deprecation")
	@Before(value = "/")
	public void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
		user=new User("1","John","Snow","John123");
	}
	
	@Test
	public void testRegisterUser()throws Exception{
		when(userService.saveUser(user)).thenReturn(user);
		mockMVC.perform(post("/registeruser").contentType(MediaType.APPLICATION_JSON).content(jsonToString(user))).andExpect(status().isCreated());
		verify(userService,times(1)).saveUser(Mockito.any(User.class));
		verifyNoMoreInteractions(userService);
	}
	
	@Test
	public void testLoginUser()throws Exception{
		String email="JohnSnow";
		String password="John123";
		when(userService.saveUser(user)).thenReturn(user);
		when(userService.fetchUserByEmailIdAndPassword(email, password)).thenReturn(user);
		mockMVC.perform(post("/login").contentType(MediaType.APPLICATION_JSON).content(jsonToString(user))).andExpect(status().isOk());
		verify(userService,times(1)).fetchUserByEmailIdAndPassword(user.getEmailId(), user.getPassword());
		verifyNoMoreInteractions(userService);
	}
	
	private String jsonToString(final Object object) {
		String result;
		try {
			final ObjectMapper mapper = new ObjectMapper();
			result = mapper.writeValueAsString(object);
		} catch (JsonProcessingException e) {
			result = "Json processing error";
		}
		return result;
	}
}

