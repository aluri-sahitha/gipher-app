package com.example.Favourite.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Favourite.exception.ItemAlreadyExistsException;
import com.example.Favourite.exception.ItemNotExistsException;
import com.example.Favourite.model.AddFavourite;
import com.example.Favourite.service.FavouriteService;



@CrossOrigin
//@CrossOrigin(origins = "http://localhost:8006", maxAge = 3600)

@RestController
@RequestMapping("/addtoyourFavourite")

public class FavouriteController {

	@Autowired
	private FavouriteService fs;
	@PostMapping("/saveFavourite")
	public ResponseEntity<?> saveFavourite(@RequestBody AddFavourite b) throws ItemAlreadyExistsException
		 {
			ResponseEntity<?> rs = null;
			try {
				AddFavourite bk = fs.saveModel(b);
				if(bk != null)
					rs = ResponseEntity.
						status(HttpStatus.CREATED).build();
				else
			rs = ResponseEntity.
				status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
			catch(Exception e) {
		rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
			}
			return rs;
		}
	
	@GetMapping("/getFavourite/{username}")
	public ResponseEntity<?> getFavourite(@PathVariable("username") String username)
		throws Exception
	{
		ResponseEntity<?> rs = null;
		try {
			List<AddFavourite> b = fs.getModelByEmail(username);
			rs = ResponseEntity.status(HttpStatus.OK).body(b);
		}
		catch(Exception e) {
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}
	
	@PostMapping("/removeFavourite")
	public ResponseEntity<?> removeFavourite(@RequestBody AddFavourite b) throws ItemNotExistsException
		 {
		
		ResponseEntity<?> rs = null;
		
		try {
			
			
			AddFavourite bk=fs.removeModel(b);
			
			if(bk != null)
				rs = ResponseEntity.
					status(HttpStatus.CREATED).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		return rs;
	}
}
	



