package com.example.ccsd.WebsiteTexts;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/websiteTexts")

public class WebsiteTextsController {
    
    @Autowired
    private WebsiteTextsService websiteTextsService;

    @GetMapping
    public List<WebsiteTexts> getAllWebsiteTexts(){
        return websiteTextsService.getAllWebsiteTexts();
    }

    @GetMapping("/{title}")
    public ResponseEntity<WebsiteTexts> getWebsiteTextsByTitle(@PathVariable String title){
        return websiteTextsService.getWebsiteTextsByTitle(title)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
public ResponseEntity<WebsiteTexts> addWebsiteText(
    @RequestParam("postShortDescription") String postShortDescription,
    @RequestParam("tag") String tag,
    @RequestParam("title") String title,
    @RequestParam("postSlug") String postSlug,
    @RequestParam("status") String status
) {
    WebsiteTexts websiteText = new WebsiteTexts(title, status, tag, postShortDescription);
    WebsiteTexts savedText = websiteTextsService.addWebsiteTexts(websiteText);
    return ResponseEntity.ok(savedText);
}

    @DeleteMapping
    public ResponseEntity<Void> deleteWebsiteTexts(@PathVariable String title){
        websiteTextsService.deleteWebsiteTexts(title);
        return ResponseEntity.noContent().build();
    }
}
