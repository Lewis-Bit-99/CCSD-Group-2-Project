package com.example.ccsd.WebsiteTexts;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WebsiteTextsRepository extends MongoRepository<WebsiteTexts, String>{ 

    public Optional<WebsiteTexts> findByTitle(String title);
    public void deleteByTitle(String title);
}
