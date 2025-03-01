package com.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student")
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer rollNumber;
	private String name;
	private String surname;
	private String gender;
	private String address;
	private String contactno;
	private String branch;

	
	
	
	public Student() {
		super();
		
	}
	public Student(Integer rollNumber, String name, String surname, String gender, String address, String contactno,
			String branch) {
		super();
		this.rollNumber = rollNumber;
		this.name = name;
		this.surname = surname;
		this.gender = gender;
		this.address = address;
		this.contactno = contactno;
		this.branch = branch;
	}
	public Integer getRollNumber() {
		return rollNumber;
	}
	public void setRollNumber(Integer rollNumber) {
		this.rollNumber = rollNumber;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContactno() {
		return contactno;
	}
	public void setContactno(String contactno) {
		this.contactno = contactno;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	@Override
	public String toString() {
		return "User [rollNumber=" + rollNumber + ", name=" + name + ", surname=" + surname + ", gender=" + gender
				+ ", address=" + address + ", contactno=" + contactno + ", branch=" + branch + "]";
	}

	
	
}
