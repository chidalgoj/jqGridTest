package com.test.response;

import java.util.Collection;

import com.test.bo.People;

public class PeopleResponse {
	
	/**
	* Current page of the query
	*/
	private String page="1";
	 
	/**
	* Total pages for the query
	*/
	private String total="10";
	 
	/**
	* Total number of records for the query
	*/
	private String records="10";
	 
	/**
	* An array that contains the actual objects
	*/
	private Collection<People> rows;
	 
		 
	public String getPage() {
	return page;
	}
	 
	public void setPage(String page) {
	this.page = page;
	}
	 
	public String getTotal() {
	return total;
	}
	 
	public void setTotal(String total) {
	this.total = total;
	}
	 
	public String getRecords() {
	return records;
	}
	 
	public void setRecords(String records) {
	this.records = records;
	}
	 
	public Collection<People> getRows() {
	return rows;
	}
	 
	public void setRows(Collection<People> rows) {
	this.rows = rows;
	}

}
