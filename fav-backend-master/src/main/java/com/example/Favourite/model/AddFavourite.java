package com.example.Favourite.model;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection="addtoyourfavourite")

public class AddFavourite {
	private String username;
	private String title;
	private String  id;
	private String url;
		
	public AddFavourite(String username, String title, String id, String url) {
		super();
		this.username = username;
		this.title = title;
		this.id = id;
		this.url = url;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	
	
	
	
}

	
	

