package com.project.demo.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.demo.model.Candidate;
import com.project.demo.repository.CandidateRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CandidateController {
	
	@Autowired
	CandidateRepository repo;
	
	@GetMapping("/candidates")
	@CrossOrigin
	public List<Candidate> getAllCandidate(){
		return repo.findAll();
	}
	
	@PostMapping("/candidates")
	@CrossOrigin
	public Candidate addCandidate(@RequestBody Candidate candidate) {
		return repo.save(candidate);
	}
	
	@DeleteMapping("/candidates/{cid}")
	@CrossOrigin
	public void deleteCandidate(@PathVariable int cid) {
		repo.deleteByCid(cid);
	}
}
