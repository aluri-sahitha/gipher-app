package com.example.Favourite.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Favourite.model.AddFavourite;
import com.sun.el.stream.Optional;

public interface FavouriteRepository extends MongoRepository<AddFavourite,Integer> {
	Optional findByUsername(String username);
	List<AddFavourite> findAllByUsername(String username);
	Optional findByUsernameAndUrl(String username,String url);
	AddFavourite deleteByUsernameAndUrl(String username,String url);
    
}
