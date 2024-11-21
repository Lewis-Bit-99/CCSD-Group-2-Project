package com.example.ccsd.Gallery;

import java.util.List;

import org.springframework.stereotype.Service;


//Variable gallery : title, quantity, 

@Service
public class galleryService {
    
    private String title ;
    private double quantity ;

    //getting all images
   
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    
    //getter for gallery Service
    public double getQuantity() {
        return quantity;
    }
    
    //setter for gallery Service
    public void setQuantity(double quantity) {

        if(quantity >= 0.0 ){
            this.quantity = quantity;
            
        }else{
            System.out.println ("Invalid number");
        }
    
    /*Creating new data
    public gallery addGallery(gallery gal) {
        return galleryService.save(gallery);
    }

    public gallery updateGallery(String id, galleryDetails) {}
    galleryService gs = new galleryService();
    gs.setTitle(title);
    gs.setQuantity(quantity);

    return updateGallery;*/

        }


    }



