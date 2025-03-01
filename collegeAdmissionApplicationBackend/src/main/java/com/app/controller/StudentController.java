package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Student;
import com.app.service.StudentServiceImpl;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
public class StudentController {
	
	@Autowired
	private StudentServiceImpl userService;
	
	@PostMapping("/register")
	public Student registerStudent(@RequestBody Student student)
	{
		log.info("User is register successfully");
		return userService.registerStudent(student);
	}
	
	@GetMapping("/home")
	public List<Student> getAllStudent()
	{
		return userService.getAllStudent();
	}
	
	
	@PutMapping("/update/{rollNumber}")
	public Student updateUserDetails(@PathVariable Integer rollNumber,@RequestBody Student student)
	{
		log.info("user updated sucessfully");
		userService.updateUserById(student);
		return student;
	}
	
	@DeleteMapping("/delete/{rollNumber}")
	public void deleteUser(@PathVariable Integer rollNumber)
	{
		userService.deleteUserById(rollNumber);
	}
	
//	@GetMapping("/login")
//	public String login()
//	{
//		return "authenticated Successfully";
//	}
	
	
}
