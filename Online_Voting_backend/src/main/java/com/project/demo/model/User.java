package com.project.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class User {
	private int aid;
	private String username;
	private String password;
	private String email;
	private String dob;
	public int getAid() {
		return aid;
	}
	public void setAid(int aid) {
		this.aid = aid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	@Override
	public String toString() {
		return "User [aid=" + aid + ", username=" + username + ", password=" + password + ", email=" + email + ", dob="
				+ dob + "]";
	}
	
}
