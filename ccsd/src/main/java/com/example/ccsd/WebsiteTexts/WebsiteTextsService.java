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
        return websiteTextsRepository.findAll();
    }

    public Optional<WebsiteTexts>getWebsiteTextsById(String id){
        return websiteTextsRepository.findById(id);
    }
    
    public WebsiteTexts addWebsiteTexts(WebsiteTexts texts){
        return websiteTextsRepository.save(texts);
    }

    public void deleteWebsiteTexts(String id){
        websiteTextsRepository.deleteById(id);

    }
}
