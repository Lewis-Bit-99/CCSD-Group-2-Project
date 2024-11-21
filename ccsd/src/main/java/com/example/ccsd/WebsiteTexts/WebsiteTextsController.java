package com.example.ccsd.WebsiteTexts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/websiteTexts")

public class WebsiteTextsController {
    
    @Autowired
    private WebsiteTextsService websiteTextsService;

    @GetMapping
    public List<WebsiteTexts> getAllWebsiteTexts(@PathVariable String id){
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
