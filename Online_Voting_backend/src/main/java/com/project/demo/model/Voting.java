package com.project.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "voting")
public class Voting {
	private int cid;
	private String name;
	private String party;
	private int vote;
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getParty() {
		return party;
	}
	public void setParty(String party) {
		this.party = party;
	}
	public int getVote() {
		return vote;
	}
	public void setVote(int vote) {
		this.vote = vote;
	}
	@Override
	public String toString() {
		return "Voting [cid=" + cid + ", name=" + name + ", party=" + party + ", vote=" + vote + "]";
	}
	
}
