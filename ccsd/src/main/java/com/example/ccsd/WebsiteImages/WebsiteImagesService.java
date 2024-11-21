package com.example.ccsd.WebsiteImages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service 
public class WebsiteImagesService {

    @Autowired 
    private WebsiteImagesRepository websiteImagesRepository;

    //Getting all websiteImages
    public List<WebsiteImages> getAllWebsiteImages() {
        return websiteImagesRepository.findAll();

    }

    //Getting single websiteImages
    public Optional<WebsiteImages> getWebsiteImagesById(String id) {
        return websiteImagesRepository.findById(id);

    }

// Creating new data in repository

public WebsiteImages addWebsiteImages(WebsiteImages websiteImages){
    return websiteImagesRepository.save(websiteImages);
}

// Updating the book

public WebsiteImages updateWebsiteImages(String id, WebsiteImages websiteImagesDetails) {
    Optional<WebsiteImages> websiteImagesOpt = websiteImagesRepository.findById(id);
    if (websiteImagesOpt.isPresent()) {

        // Get from database

        WebsiteImages websiteImages = websiteImagesOpt.get();
        websiteImages.setId(websiteImagesDetails.getId());
        websiteImages.setImageUrl(websiteImagesDetails.getImageUrl());
        websiteImages.setAltText(websiteImagesDetails.getAltText());
        websiteImages.setWidth(websiteImagesDetails.getWidth());
        websiteImages.setHeight(websiteImagesDetails.getHeight());
        return websiteImagesRepository.save(websiteImages);
    }
    return null;
}

// Deleting

public void deleteWebsiteImages(String id) {
    websiteImagesRepository.deleteById(id);
}
}

