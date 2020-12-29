package com.example.demo.service;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.ItemNotExistsException;
import com.example.demo.model.Recommend;
import com.example.demo.repository.RecommendRepository;


@Service
public class RecommendService {
	
	@Autowired
	private RecommendRepository fr;

	public Recommend saveModel(Recommend m)  {
		//---------
//		Optional<Recommend> op= Optional.empty();
		Recommend bk=fr.save(m);
		return bk;

	}
	
	public Recommend updateModel(Recommend m)  {
		//---------
//		Optional<Recommend> op= Optional.empty();
		Recommend bk=fr.insert(m);
		return bk;

	}

	
	public List<Recommend> getModel()
	{

		List<Recommend> l=fr.findAll();
		return l;
	}
	
	
	public List<Recommend> getModelById(String  id)
	{

		List<Recommend> l=fr.findAllById(id);
		return l;
	}
	
	public Recommend removeModel(Recommend m) throws  ItemNotExistsException{
		//Optional<Model> op=fr.findByUrl(m.getUrl());
		/*
		 * if(op.isPresent()) { fr.delete(m); }
		 * 
		 */
		Recommend fav= fr.deleteByIdAndUrl(m.getId(),m.getUrl());
		return fav;
	}

//	public AddFavourite removeModel(AddFavourite m) throws ItemNotExistsException{
//		//Optional<Model> op=fr.findByUrl(m.getUrl());
//		/*
//		 * if(op.isPresent()) { fr.delete(m); }
//		 * 
//		 */
//		AddFavourite fav= fr.deleteByUsernameAndFdcid(m.getUsername(),m.getFdcid());
//		return fav;
//	}

}
