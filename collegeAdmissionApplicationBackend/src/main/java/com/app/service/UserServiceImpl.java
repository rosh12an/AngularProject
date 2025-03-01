package com.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.User;
import com.app.exception.ResourceNotFoundException;
import com.app.repository.UserRepository;

@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User loginUser(String email, String password) {
		
		User user = userRepository.findByEmailAndPassword(email, password);
		return user;
	}

}
