package com.example.ccsd.Products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;

    // Getting all products
    public List<products> getAllproducts() {
        return productRepository.findAll();
    }

    // Getting single boks
    public Optional<products> getProductById(String id) {
        return productRepository.findById(id);
    }

    // Creating new data in repository

    public products addProduct(products product) {
        return productRepository.save(product);
    }

    // Updating the product

    public products updateProduct(String id, products productDetails) {
        Optional<products> productOpt = productRepository.findById(id);
        if (productOpt.isPresent()) {

            // Get from database

            products product = productOpt.get();
            product.setTitle(productDetails.getTitle());
            product.setDate(productDetails.getDate());
            product.setStatus(productDetails.getStatus());
            product.setProductPlace(productDetails.getProductPlace());
            product.setTags(productDetails.getTags());
            product.setDescriptions(productDetails.getDescriptions());
            product.setWebsiteImage(productDetails.getWebsiteImage());
            product.setWebsiteGallery(productDetails.getWebsiteGallery());
            product.setId(productDetails.getId());
            return productRepository.save(product);
        }
        return null;
    }

    // Deleting
    
    public void deleteproduct(String id) {
        productRepository.deleteById(id);
    }
}
