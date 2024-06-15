package com.project.demo.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.demo.model.User;
import com.project.demo.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	UserRepository repo;
	
	@GetMapping("/users")
	@CrossOrigin
	public List<User> getAllUsers(){
		return repo.findAll();
	}
	
	@PostMapping("/users")
	@CrossOrigin
	public User addUser(@RequestBody User user){
		return repo.save(user);
	}
	
	@GetMapping("/users/{aid}")
	@CrossOrigin
	public User getByAid(@PathVariable int aid) {
		return repo.findByAid(aid);
	}
}
