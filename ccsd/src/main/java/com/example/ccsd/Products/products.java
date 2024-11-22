package com.example.ccsd.Products;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;




@Document(collection = "products")
public class products{
    @Id
    private String id;
    private String title;
    private Date productDate; // dd/mm/yy
    private String status;
    private int productPlace;
    private String tags;
    private String descriptions;
    private String websiteImage;
    private String longDescriptions;

    public products(){}
    public products(String id,String title, Date productDate, 
                    String status, int productPlace, String tags, 
                    String descriptions, String websiteImage, String longDescriptions) {
        this.id = id;             
        this.title = title;
        this.productDate = productDate;
        this.status = status;
        this.productPlace = productPlace;
        this.tags = tags;
        this.descriptions = descriptions;
        this.websiteImage = websiteImage;
        this.longDescriptions = longDescriptions;
    }



    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getDate() {
        return productDate;
    }

    public void setDate(Date productDate) {
        this.productDate = productDate;
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

    public String getLongDescriptions() {
        return longDescriptions;
    }

    public void setLongDescriptions(String longDescriptions) {
        this.longDescriptions = longDescriptions;
    }
    

}
