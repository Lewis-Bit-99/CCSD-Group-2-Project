package com.example.ccsd.WebsiteImages;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/WebsiteImages")
public class WebsiteImagesController {

    @Autowired
    private WebsiteImagesService websiteImagesService;

    @GetMapping
    public List<WebsiteImages> getAllWebsiteImages() {
        return websiteImagesService.getAllWebsiteImages();

    }

    @GetMapping("/{id}")
        public ResponseEntity<WebsiteImages>getWebsiteImagesById(@PathVariable String id) {
            return websiteImagesService.getWebsiteImagesById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());

    }

@PostMapping(consumes = {"multipart/form-data"})
public ResponseEntity<WebsiteImages> addWebsiteImages(
    @RequestParam("tag") String tag,
    @RequestParam("title") String title,
    @RequestParam("status") String status,
    @RequestParam("place") int place,
    @RequestParam("imageUrl") MultipartFile imageUrl 
) {
    try {
        // Add file storage logic here
        String fileName = "tempFileName"; // Replace with actual file storage logic
        
        WebsiteImages websiteImages = new WebsiteImages();
        websiteImages.setTag(tag);
        websiteImages.setTitle(title);
        websiteImages.setStatus(status);
        websiteImages.setPlace(place);
        websiteImages.setImageUrl(fileName);

        WebsiteImages savedImage = websiteImagesService.addWebsiteImages(websiteImages);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedImage);
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
}


    @PutMapping("/{id}")
    public ResponseEntity<WebsiteImages> updateWebsiteImages(@PathVariable String id, @RequestBody WebsiteImages websiteImagesDetails) {
        WebsiteImages updatedWebsiteImages = websiteImagesService.updateWebsiteImages(id, websiteImagesDetails);
        if (updatedWebsiteImages != null) {
            return ResponseEntity.ok(updatedWebsiteImages);
        }
        return ResponseEntity.notFound().build();

        }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable String id) {
        websiteImagesService.deleteWebsiteImages(id);
        return ResponseEntity.noContent().build();


    }

    }