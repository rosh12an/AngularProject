package com.app.service;

import com.app.entity.User;

public interface IUserService {

	User loginUser(String email, String password);
}
