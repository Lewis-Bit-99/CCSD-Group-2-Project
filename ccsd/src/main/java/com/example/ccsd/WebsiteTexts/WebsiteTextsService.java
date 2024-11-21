package com.example.ccsd.WebsiteTexts;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class WebsiteTextsService {

    @Autowired
    private WebsiteTextsRepository websiteTextsRepository;
    
    public List<WebsiteTexts>getAllWebsiteTexts(){
        return websiteTextsRepository.findAll();//
    }

    public Optional<WebsiteTexts>getAllWebsiteTextsById(String id){
        return WebsiteTextsRepository.findById(id);
    }
    
    public WebsiteTexts addWebsiteTexts(WebsiteTexts texts){
        return WebsiteTextsRepository.save(texts);
    }

    public void deleteWebsiteTexts(String id){
        websiteTextsRepository.deleteById(id);

    }
}
