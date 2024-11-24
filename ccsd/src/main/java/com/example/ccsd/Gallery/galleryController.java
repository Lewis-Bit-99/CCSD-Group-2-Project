package com.example.ccsd.Gallery;

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
@RequestMapping("/api/gallery")
public class galleryController {

    @Autowired
    private galleryService gService;

    // Get all gallery items
    @GetMapping
    public List<gallery> getAllGallery() {
        return gService.getAllGallery();    
    }

    // Get a single gallery item by ID
    @GetMapping("/{id}")
    public ResponseEntity<gallery> getGalleryById(@PathVariable String id) {
        return gService.getGalleryById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // Create new gallery in the system
    @PostMapping(consumes = "application/json")
    public gallery addGallery(@RequestBody gallery galleryDetails) {
        return gService.addGallery(galleryDetails);
    }

    // Update an existing gallery based on gallery ID
    @PutMapping("/{id}")
    public ResponseEntity<gallery> updateGallery(@PathVariable String id, @RequestBody gallery galleryDetails) {
        gallery updateGallery = gService.updateGallery(id, galleryDetails);
        if (updateGallery != null) {
            return ResponseEntity.ok(updateGallery);
        }
        return ResponseEntity.notFound().build();
    }

    // Delete a gallery from the system based on gallery ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGallery(@PathVariable String id) {
        gService.deleteGallery(id);
        return ResponseEntity.noContent().build();
    }
}
