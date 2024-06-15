package com.project.demo.repository;



import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.demo.model.Candidate;

public interface CandidateRepository extends MongoRepository<Candidate, Integer>{
	
		public void deleteByCid(int cid);
}
