package com.example.ccsd.WebsiteImages;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/websiteimages")
public class WebsiteImagesController {

    @Autowired
    private WebsiteImagesService websiteImagesService;

    // Get all website images
    @GetMapping
    public List<WebsiteImages> getAllWebsiteImages() {
        return websiteImagesService.getAllWebsiteImages();
    }

    // Get a single website image by ID
    @GetMapping("/{id}")
    public ResponseEntity<WebsiteImages> getWebsiteImageById(@PathVariable String id) {
        return websiteImagesService.getWebsiteImagesById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // Create a new website image in the system
    @PostMapping(consumes = "application/json")
    public WebsiteImages addWebsiteImage(@RequestBody WebsiteImages websiteImageDetails) {
        return websiteImagesService.addWebsiteImages(websiteImageDetails);
    }

    // Update an existing website image based on image ID
    @PutMapping("/{id}")
    public ResponseEntity<WebsiteImages> updateWebsiteImage(@PathVariable String id, @RequestBody WebsiteImages websiteImageDetails) {
        WebsiteImages updatedWebsiteImage = websiteImagesService.updateWebsiteImages(id, websiteImageDetails);
        if (updatedWebsiteImage != null) {
            return ResponseEntity.ok(updatedWebsiteImage);
        }
        return ResponseEntity.notFound().build();
    }

    // Delete a website image from the system based on image ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWebsiteImage(@PathVariable String id) {
        websiteImagesService.deleteWebsiteImages(id);
        return ResponseEntity.noContent().build();
    }
}
