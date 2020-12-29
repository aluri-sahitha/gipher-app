package com.example.demo.model;

import java.util.Arrays;

import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "addtoyourrecommend")
public class Recommend {
	private Boolean recommend;
	private String url;
	private String id;
	private int count;
	public Recommend(Boolean recommend, String url, String id, int count) {
		super();
		this.recommend = recommend;
		this.url = url;
		this.id = id;
		this.count = count;
	}
	public Boolean getRecommend() {
		return recommend;
	}
	public void setRecommend(Boolean recommend) {
		this.recommend = recommend;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	
	
	
}
