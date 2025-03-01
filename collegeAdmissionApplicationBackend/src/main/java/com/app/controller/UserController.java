package com.app.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.User;
import com.app.repository.UserRepository;
import com.app.service.UserServiceImpl;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin(origins = "*")
@Slf4j
public class UserController {

	@Autowired
	private UserServiceImpl userService;
	
	@Autowired
	private UserRepository userRepo;
	
//	@PostMapping("/getUser")
//	public ResponseEntity<?> loginAdmin(@RequestBody User userData)
//	{
//		User user = userRepo.findByEmailAndPassword(userData.getEmail(), userData.getPassword());
//		if(user.getEmail().equals(userData.getEmail()))
//			return ResponseEntity.ok(user);
//		
//		return (ResponseEntity<?>) ResponseEntity.internalServerError();
//	}
	
	@GetMapping("/login")
	public String login()
	{
		return "authenticated Successfully";
	}
	
	@GetMapping("/sayHi")
	public String sayHi()
	{
		return "hi";
	}
	
}
