package com.example.ccsd.Products;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/products")
public class productsController {
    
    @Autowired
    private productsService productsService;

@GetMapping
public List<products> getAllProducts() {
    List<products> productsList = productsService.getAllProducts();  // Get all products

    // Process each product in the list
    return productsList.stream()
            .map(product -> {
                // Add Base64 encoded image to each product
                product.setImageStore64String(product.getImageAsBase64());
                return product;
            })
            .collect(Collectors.toList());  // Collect the processed products back into a list
}

    @GetMapping("/{id}")
    public ResponseEntity<products> getProductskById(@PathVariable String id) {
        return productsService.getProductsById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    //---- ORIGINAL POST METHOD
    // @PostMapping
    // public products addProducts(@RequestBody products Products) {
    //     return productsService.addProducts(Products);
    // }



    ///
    /// //
    //---- TESTING 
    // @PostMapping
    // public products addProducts(@RequestBody products Products, @RequestParam("adsImages") MultipartFile[] adsImages) throws IOException {
    //     String uploadDirectory = "src/main/resources/static/images/";
    //     StringBuilder adsImagesString = new StringBuilder();
    
    //     // Save each image and append the filename (or URL) to the string
    //     for (MultipartFile imageFile : adsImages) {
    //         String savedImagePath = productsService.saveImageToStorage(uploadDirectory, imageFile);
    //         adsImagesString.append(savedImagePath).append(",");  // Adding the saved image path to the list
    //     }
    
    //     // Store the image paths in the product object (make sure to remove the last comma)
    //     Products.setImageStore(adsImagesString.toString().endsWith(",") 
    //         ? adsImagesString.substring(0, adsImagesString.length() - 1) 
    //         : adsImagesString.toString());
    
    //     // Save product details along with the image path(s)
    //     return productsService.addProducts(Products);
    // }
    //
    //
    //

    /// second try
         @PostMapping
    public ResponseEntity<Map<String, Object>> addProduct(
            @RequestParam("title") String title,
            @RequestParam("postSlug") String postSlug,
            @RequestParam("postShortDescription") String postShortDescription,
            @RequestParam("tag") String tag,
            @RequestParam("place") String place,
            @RequestParam("date") String date,
            @RequestParam("status") String status,
            @RequestParam("image") MultipartFile image) throws IOException {

        // Convert the image to a byte array
        byte[] imageBytes = image.getBytes();  // Get image data

        // Create a new Product instance
        products product = new products();
        product.setTitle(title);
        product.setPostSlug(postSlug);
        product.setPostShortDescription(postShortDescription);
        product.setTag(tag);
        product.setPlace(place);
        product.setDateProduct(date);
        product.setStatus(status);
        product.setImageStore(imageBytes);  // Store image as byte array

        // Save the product in MongoDB
        products savedProduct = productsService.addProducts(product);

        // Return a response
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("product", savedProduct);
        
        return ResponseEntity.ok(response);
    }
    //////////////////////////////////////////////////////////////////

    @PutMapping("/{id}")
    public ResponseEntity<products> updateProducts(@PathVariable String id, @RequestBody products ProductsDetail) {
        products updatedProducts = productsService.updateProducts(id, ProductsDetail);
        if (updatedProducts != null) {
            return ResponseEntity.ok(updatedProducts);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProducts(@PathVariable String id) {
        productsService.deleteProducts(id);
        return ResponseEntity.noContent().build();
    }
}