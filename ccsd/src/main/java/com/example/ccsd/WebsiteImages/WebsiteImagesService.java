package com.example.ccsd.WebsiteImages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.streotype.Service;

import java.util.List;
import java.util.Optional;

@Service 
public class WebsiteImages {

    @Autowired 
    private WebsiteImagesRepository websiteImagesRepository;

    //Getting all websiteImages
    public List<WebsiteImages> getAllWebsiteImages() {
        return websiteImagesRepository.findAll();

    }

    //Getting single websiteImages
    public Optional<WebsiteImages> getWebsiteImagesById(String id) {
        return websiteImagesRepository.findById();

    }
}
// Creating new data in repository

public WebsiteImages addBook(WebsiteImages websiteImages) {
    return websiteImagesRepository.save(websiteImages);
}

// Updating the book

public updateWebsiteImages(String id, Book websiteImagesDetails) {
    Optional<WebsiteImages> websiteImagesOpt = websiteImagesDetailsRepository.findById(id);
    if (bookOpt.isPresent()) {

        // Get from database

        WebsiteImages websiteImages = websiteImagesDetailsOpt.get();
        websiteImages.setTitle(websiteImagesDetails.getTitle());
        book.setAuthor(websiteImagesDetails.getAuthor());
        book.setIsbn(websiteImagesDetails.getIsbn());
        book.setAvailable(bookDetails.isAvailable());
        return bookRepository.save(book);
    }
    return null;
}

// Deleting

public void deleteBook(String id) {
    bookRepository.deleteById(id);
}
}

