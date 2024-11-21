package com.example.ccsd.Products;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/products")
public class ProductController{
    @Autowired
    private ProductService productService;

    @GetMapping
    public List<products> getAllProducts() {
        return productService.getAllproducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<products> getProductById(@PathVariable String id) {
        return productService.getProductById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public products addProduct(@RequestBody products product) {
        return productService.addProduct(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<products> updateProduct(@PathVariable String id, @RequestBody products productDetails) {
        products updatedProduct = productService.updateProduct(id, productDetails);
        if (updatedProduct != null) {
            return ResponseEntity.ok(updatedProduct);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable String id) {
        productService.deleteproduct(id);
        return ResponseEntity.noContent().build();
    }
}
