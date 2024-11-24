package com.example.ccsd.Products;

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
public class productsService {
    
    @Autowired
    private productsRepository ProductsRepository;

    // Getting all books
    public List<products> getAllProducts() {
        return ProductsRepository.findAll();
    }

    // Getting single boks
    public Optional<products> getProductsById(String id) {
        return ProductsRepository.findById(id);
    }

    // Creating new data in repository

    public products addProducts(products Products) {
        return ProductsRepository.save(Products);
    }

    // Updating the book

    public products updateProducts(String id, products ProductsDetail) {
        Optional<products> ProductsOpt = ProductsRepository.findById(id);
        if (ProductsOpt.isPresent()) {

            // Get from database
            products Products = ProductsOpt.get();
             // list to get the database
            Products.setAuthor(ProductsDetail.getAuthor());
            Products.setPostShortDescription(ProductsDetail.getPostShortDescription());
            Products.setTag(ProductsDetail.getTag());
            Products.setPlace(ProductsDetail.getPlace());
            Products.setTitle(ProductsDetail.getTitle());
            Products.setPostSlug(ProductsDetail.getPostSlug());
            Products.setContent(ProductsDetail.getContent());
            Products.setStatus(ProductsDetail.getStatus());
            Products.setDateProduct(ProductsDetail.getDateProduct());
            Products.setImageStore(ProductsDetail.getImageStore());
            return ProductsRepository.save(Products);
    
        }
        return null;
    }

    // Deleting
    
    public void deleteProducts(String id) {
        ProductsRepository.deleteById(id);
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

    // Delete an image
    public String deleteImage(String imageDirectory, String imageName) throws IOException {
        Path imagePath = Path.of(imageDirectory, imageName);

        if (Files.exists(imagePath)) {
            Files.delete(imagePath);
            return "Success";
        } else {
            return "Failed"; // Handle missing images
        }
    }
}