package com.example.ccsd.WebsiteTexts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/websiteTexts")

public class WebsiteTextsController {
    
    @Autowired
    private WebsiteTextsService websiteTextsService;

    @GetMapping
    public List<WebsiteTexts> getAllWebsiteTexts(){
        return websiteTextsService.getAllWebsiteTexts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<WebsiteTexts> getWebsiteTextsById(@PathVariable String id){
        return websiteTextsService.getWebsiteTextsById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public WebsiteTexts addWebsiteTexts(@RequestBody WebsiteTexts texts){
        return websiteTextsService.addWebsiteTexts(texts);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteWebsiteTexts(@PathVariable String id){
        websiteTextsService.deleteWebsiteTexts(id);
        return ResponseEntity.noContent().build();
    }
}
