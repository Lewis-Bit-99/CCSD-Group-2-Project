package com.example.ccsd.Products;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;




@Document(collection = "products")
public class products{
    @Id
    private String title;
    private Date date; // dd/mm/yy
    private String status;
    private int productPlace;
    private String tags;
    private String descriptions;
    private String websiteImage;
    private String websiteGallery;

    public products(){}
    public products(String title, Date date, 
                    String status, int productPlace, String tags, 
                    String descriptions, String websiteImage, String websiteGallery) {
        this.title = title;
        this.date = date;
        this.status = status;
        this.productPlace = productPlace;
        this.tags = tags;
        this.descriptions = descriptions;
        this.websiteImage = websiteImage;
        this.websiteGallery = websiteGallery;
    }



    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

   

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getProductPlace() {
        return productPlace;
    }

    public void setProductPlace(int productPlace) {
        this.productPlace = productPlace;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public String getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(String descriptions) {
        this.descriptions = descriptions;
    }

    public String getWebsiteImage() {
        return websiteImage;
    }

    public void setWebsiteImage(String websiteImage) {
        this.websiteImage = websiteImage;
    }

    public String getWebsiteGallery() {
        return websiteGallery;
    }

    public void setWebsiteGallery(String websiteGallery) {
        this.websiteGallery = websiteGallery;
    }
    

}
