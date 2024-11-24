package com.example.ccsd.WebsiteImages;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
public class WebsiteImagesService {
    

    @Autowired
    private WebsiteImagesRepository websiteImagesRepository;

    // Getting all 
    public List<WebsiteImages> getAllWebsiteImageses() {
        return websiteImagesRepository.findAll();
    }

    // Getting single 
    public Optional<WebsiteImages> getWebsiteImagesById(String id) {
        return websiteImagesRepository.findById(id);
    }

    // Creating new data in repository

    public WebsiteImages addWebsiteImages(WebsiteImages websiteImages) {
        return websiteImagesRepository.save(websiteImages);
    }

        // Updating 

        public WebsiteImages updateWebsiteImages(String id, WebsiteImages websiteImagesDetails) {
            Optional<WebsiteImages> websiteImagesOpt = websiteImagesRepository.findById(id);
            if (websiteImagesOpt.isPresent()) {
    
                // Get from database
    
                WebsiteImages websiteImages = websiteImagesOpt.get();
                websiteImages.setTitle(websiteImagesDetails.getTitle());
                websiteImages.setpostShortDescription(websiteImagesDetails.getpostShortDescription());
                websiteImages.setDate(websiteImages.getDate());
                websiteImages.setStatus(websiteImagesDetails.getStatus());
                websiteImages.setTag(websiteImagesDetails.getTag());
                websiteImages.setPlace(websiteImagesDetails.getPlace());
                websiteImages.setContent(websiteImagesDetails.getContent());
                websiteImages.setPostSlug(websiteImagesDetails.getPostSlug());
                websiteImages.setimage(websiteImagesDetails.getimage());
                return websiteImagesRepository.save(websiteImages);
            }
            return null;
        }

        // Deleting
        
        public void deleteWebsiteImages(String id) {
            websiteImagesRepository.deleteById(id);
        }

           // Save image in a local directory
    public String saveImageToStorage(String uploadDirectory, MultipartFile imageFile) throws IOException {
        String uniqueFileName = UUID.randomUUID().toString() + "_" + imageFile.getOriginalFilename();
    
        Path uploadPath = Path.of(uploadDirectory);
        Path filePath = uploadPath.resolve(uniqueFileName);
    
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
    
        Files.copy(imageFile.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
    
        return uniqueFileName;  // Return the filename, which you can later use for linking
    }
    
    // To view an image
    public byte[] getImage(String imageDirectory, String imageName) throws IOException {
        Path imagePath = Path.of(imageDirectory, imageName);

        if (Files.exists(imagePath)) {
            byte[] imageBytes = Files.readAllBytes(imagePath);
            return imageBytes;
        } else {
            return null; // Handle missing images
        }
    }

    
}