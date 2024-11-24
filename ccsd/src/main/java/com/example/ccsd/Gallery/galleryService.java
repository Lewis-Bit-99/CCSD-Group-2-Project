package com.example.ccsd.Gallery;

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
public class galleryService {
    
    @Autowired
    private galleryRepository GalleryRepository;

    // Getting all Gallerys
    public List<gallery> getAllGallerys() {
        return GalleryRepository.findAll();
    }

    // Getting single 
    public Optional<gallery> getGalleryById(String id) {
        return GalleryRepository.findById(id);
    }

    // Creating new data in repository

    public gallery addGallery(gallery Gallery) {
        return GalleryRepository.save(Gallery);
    }

    public gallery updategallery(String id, gallery GalleryDetails) {
        Optional<gallery> GalleryOpt = GalleryRepository.findById(id);
        if (GalleryOpt.isPresent()) {

            // Get from database

            gallery Gallery = GalleryOpt.get();
            Gallery.setTitle(GalleryDetails.getTitle());
            Gallery.setimage(GalleryDetails.getimage());
            Gallery.setpostShortDescription(GalleryDetails.getpostShortDescription());
            Gallery.setDate(GalleryDetails.getDate());
            Gallery.setStatus(GalleryDetails.getStatus());
            Gallery.setTag(GalleryDetails.getTag());
            Gallery.setPlace(GalleryDetails.getPlace());
            Gallery.setPostSlug(GalleryDetails.getPostSlug());
            Gallery.setContent(GalleryDetails.getContent());

            return GalleryRepository.save(Gallery);
        }

        return null;
    }

    // Deleting
    
    public void deletegallery(String id) {
        GalleryRepository.deleteById(id);
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
    public byte[] getimage(String imageDirectory, String image) throws IOException {
        Path imagePath = Path.of(imageDirectory, image);

        if (Files.exists(imagePath)) {
            byte[] imageBytes = Files.readAllBytes(imagePath);
            return imageBytes;
        } else {
            return null; // Handle missing images
        }
    }

    // Delete an image
    public String deleteImage(String imageDirectory, String image) throws IOException {
        Path imagePath = Path.of(imageDirectory, image);

        if (Files.exists(imagePath)) {
            Files.delete(imagePath);
            return "Success";
        } else {
            return "Failed"; // Handle missing images
        }
    }
}
