package com.example.ccsd.WebsiteImages;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WebsiteImagesService {

    @Autowired
    private WebsiteImagesRepository websiteImagesRepository;

    // Get all WebsiteImages
    public List<WebsiteImages> getAllWebsiteImages() {
        return websiteImagesRepository.findAll();
    }

    // Get a single WebsiteImages by ID
    public Optional<WebsiteImages> getWebsiteImagesById(String id) {
        return websiteImagesRepository.findById(id);
    }

    // Create a new WebsiteImage
    public WebsiteImages addWebsiteImages(WebsiteImages websiteImages) {
        return websiteImagesRepository.save(websiteImages);
    }

    // Update an existing WebsiteImage
    public WebsiteImages updateWebsiteImages(String id, WebsiteImages websiteImagesDetails) {
        Optional<WebsiteImages> websiteImagesOpt = websiteImagesRepository.findById(id);

        if (websiteImagesOpt.isPresent()) {
            // Get the existing WebsiteImages from the database
            WebsiteImages websiteImages = websiteImagesOpt.get();

            // Update fields with new data
            websiteImages.setTitle(websiteImagesDetails.getTitle());
            websiteImages.setTag(websiteImagesDetails.getTag());
            websiteImages.setStatus(websiteImagesDetails.getStatus());
            websiteImages.setPlace(websiteImagesDetails.getPlace());
            websiteImages.setImageUrl(websiteImagesDetails.getImageUrl());

            return websiteImagesRepository.save(websiteImages);
        }

        return null; // Return null if the image with the given ID doesn't exist
    }

    // Delete a WebsiteImage by ID
    public void deleteWebsiteImages(String id) {
        websiteImagesRepository.deleteById(id);
    }
}
