package com.project.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.demo.model.User;

public interface UserRepository extends MongoRepository<User, Integer>{

	public User findByAid(int aid);
}