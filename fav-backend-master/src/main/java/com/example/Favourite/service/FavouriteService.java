package com.example.Favourite.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Favourite.exception.ItemAlreadyExistsException;
import com.example.Favourite.exception.ItemNotExistsException;
import com.example.Favourite.model.AddFavourite;
import com.example.Favourite.repository.FavouriteRepository;





@Service
public class FavouriteService {
@Autowired
private FavouriteRepository fr;

public AddFavourite saveModel(AddFavourite m) throws ItemAlreadyExistsException {
	//---------
	Optional<AddFavourite> op= Optional.empty();
	if(op.isPresent())
	{
		 throw new ItemAlreadyExistsException();
	}
	else
	{
		AddFavourite bk=fr.save(m);
	return bk;
	}

}

public List<AddFavourite> getModelByEmail(String user)throws Exception 
{

	List<AddFavourite> l=fr.findAllByUsername(user);
	return l;
}

public AddFavourite removeModel(AddFavourite m) throws  ItemNotExistsException{
	//Optional<Model> op=fr.findByUrl(m.getUrl());
	/*
	 * if(op.isPresent()) { fr.delete(m); }
	 * 
	 */
	AddFavourite fav= fr.deleteByUsernameAndUrl(m.getUsername(),m.getUrl());
	return fav;
}
}