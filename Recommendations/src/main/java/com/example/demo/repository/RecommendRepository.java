package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Recommend;

import com.sun.el.stream.Optional;

public interface RecommendRepository extends MongoRepository<Recommend,Integer>{
	Optional findByRecommend(Boolean recommend);
	List<Recommend> findAllByRecommend(Boolean recommend);
	List<Recommend> findAllById(String id);
	Recommend deleteByIdAndUrl(String id,String url);
}
