package com.project.demo.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.demo.model.Voting;
import com.project.demo.repository.VotingRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VotingController {
	
	@Autowired
	VotingRepository repo;
	
	@PostMapping("/voting")
	@CrossOrigin
	public Voting addVoting(@RequestBody Voting voting) {
		return repo.save(voting);
	}
}
