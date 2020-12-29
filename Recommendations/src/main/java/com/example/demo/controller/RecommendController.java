package com.example.demo.controller;

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

import com.example.demo.exception.ItemNotExistsException;
import com.example.demo.model.Recommend;
import com.example.demo.service.RecommendService;



@RestController
@RequestMapping("/addrecommend")
public class RecommendController {
	
	@Autowired
	private RecommendService fs;
	@PostMapping("/saveRecommend")
	@CrossOrigin(origins = "http://localhost:4200")

	public ResponseEntity<?> saveFavourite(@RequestBody Recommend b) 
		 {
			ResponseEntity<?> rs = null;
			Recommend bk = fs.saveModel(b);
			if(bk != null)
				rs = ResponseEntity.
					status(HttpStatus.CREATED).build();
			else
				rs = ResponseEntity.
			status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			return rs;
		}
			
	@PostMapping("/updateRecommend")
	@CrossOrigin(origins = "http://localhost:4200")

	public ResponseEntity<?> updateFavourite(@RequestBody Recommend b) 
		 {
			ResponseEntity<?> rs = null;
			Recommend bk = fs.updateModel(b);
			if(bk != null)
				rs = ResponseEntity.
					status(HttpStatus.CREATED).build();
			else
				rs = ResponseEntity.
			status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			return rs;
		}
		
	
	@GetMapping("/getRecommends")
	@CrossOrigin(origins = "http://localhost:4200")

	public ResponseEntity<?> getFavourite()
		
	{
		ResponseEntity<?> rs = null;
		List<Recommend> b = fs.getModel();
		rs = ResponseEntity.status(HttpStatus.OK).body(b);
		return rs;
	}
	
	@GetMapping("/getRecommends/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public ResponseEntity<?> getFavouriteById(@PathVariable("id") String id)
		
	{
		ResponseEntity<?> rs = null;
		List<Recommend> b = fs.getModelById(id);
		rs = ResponseEntity.status(HttpStatus.OK).body(b);
		return rs;
	}
	
	@PostMapping("/removeFavourite")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<?> removeFavourite(@RequestBody Recommend b) throws ItemNotExistsException
		 {
		
		ResponseEntity<?> rs = null;
		
		try {
			
			
			Recommend bk=fs.removeModel(b);
			
			if(bk != null)
				rs = ResponseEntity.
					status(HttpStatus.CREATED).build();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		return rs;
	}
//	@PostMapping("/removeMeal")
//	@CrossOrigin(origins = "http://localhost:4200")
//
//	public ResponseEntity<?> removeMeal(@RequestBody AddFavourite b) throws ItemNotExistsException
//		 {
//		
//		ResponseEntity<?> rs = null;
//		
//		try {
//			
//			
//			AddFavourite bk=fs.removeModel(b);
//			
//			if(bk != null)
//				rs = ResponseEntity.
//					status(HttpStatus.CREATED).build();
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	
//		return rs;
//	}
}
