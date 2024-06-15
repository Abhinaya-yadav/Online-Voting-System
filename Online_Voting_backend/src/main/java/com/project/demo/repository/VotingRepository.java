package com.project.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.demo.model.Voting;

public interface VotingRepository extends MongoRepository<Voting, Integer>{
	
	

}
