package com.example.ccsd.Gallery;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


//Variable gallery : title, quantity, 

@Service
public class galleryService {

    @Autowired
    private galleryRepository GalleryRepository;
    
    public List<gallery> getAllGallery() {
        return GalleryRepository.findAll();
    }

    public Optional<gallery> getGalleryById(String id) {
        return GalleryRepository.findById(id);
    }

    public gallery addGallery(gallery Gallery) {
        return GalleryRepository.save(Gallery);
    }

    public gallery updateGallery(String id, gallery galleryDetails) {
        Optional<gallery> galleryOpt = GalleryRepository.findById(id);
        if (galleryOpt.isPresent()) {
           gallery Gallery = galleryOpt.get();
           
  
            Gallery.setImage(galleryDetails.getImage());
            Gallery.setTag(galleryDetails.getTag());
            Gallery.setTitle(galleryDetails.getTitle());
            Gallery.setStatus(galleryDetails.getStatus());
            Gallery.setPlace(galleryDetails.getPlace());
            Gallery.setTag(galleryDetails.getTag());
            
            return GalleryRepository.save(Gallery);
        }
        return null;
    }

    
    public void deleteGallery(String id) {
        GalleryRepository.deleteById(id);
    }
}


