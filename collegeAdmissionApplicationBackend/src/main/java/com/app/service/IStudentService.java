package com.app.service;

import java.util.List;

import com.app.entity.Student;

public interface IStudentService {

	Student registerStudent(Student student);
	
	List<Student> getAllStudent();
	
	Student updateUserById(Student student);
	
	void deleteUserById(Integer rollNumber);
}
