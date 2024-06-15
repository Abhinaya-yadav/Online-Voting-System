package com.project.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "candidate")
public class Candidate {
	private int cid;
	private String name;
	private String party;
	private String place;
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
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	@Override
	public String toString() {
		return "Candidate [cid=" + cid + ", name=" + name + ", party=" + party + ", place=" + place + "]";
	}
	
	
}
