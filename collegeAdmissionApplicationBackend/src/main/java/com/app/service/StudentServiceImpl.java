package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Student;
import com.app.exception.ResourceNotFoundException;
import com.app.repository.StudentRepository;

@Service
public class StudentServiceImpl implements IStudentService {

	@Autowired
	private StudentRepository studentRepository;
	
	public Student registerStudent(Student student) {
		return studentRepository.save(student);
	}
	
	public List<Student> getAllStudent()
	{
		return studentRepository.findAll();
	}
	
	public Student updateUserById(Student student)
	{
			studentRepository.findById(student.getRollNumber()).orElseThrow(()-> new ResourceNotFoundException("Student not exist"));
			return studentRepository.save(student);
			
	}
	
	public void deleteUserById(Integer rollNumber)
	{
		studentRepository.deleteById(rollNumber);
	}
}
