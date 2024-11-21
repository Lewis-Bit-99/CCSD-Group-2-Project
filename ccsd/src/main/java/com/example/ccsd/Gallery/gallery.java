package com.example.ccsd.Gallery;



import org.springframework.data.annotation.Id;

public class gallery {

    @Id
    private String galleryId;
    private String image;
    private String info;
    
   
    // Constructors

    public gallery(){}

    public gallery(String image, String info){
        this.image = image;
        this.info = info;
    }

    public String getGalleryIs(){
        return galleryId;
    }
    public String getImage(){
        return image;
    }

    public void setImage(String image){
        this.image = image;
    }
    
    public String getInfo(){
        return info;
    }

    public void setInfo(String info){
        this.info = info;
    }

    
    }
