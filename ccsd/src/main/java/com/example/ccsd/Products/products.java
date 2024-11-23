package com.example.ccsd.Products;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;




@Document(collection = "products")
public class products{      
    @Id
    private String id;
    private String title;
    private Date date; // dd/mm/yy
    private String status;
    private int place;
    private String tag;
    private String postShortDescription;
    private String websiteImage;
    private String content;
    private String postSlug;

    public products(){}
    public products(String id,String title, Date date, 
                    String status, int place, String tag, 
                    String postShortDescription, String websiteImage, String content, String postSlug) {
        this.id = id;             
        this.title = title;
        this.date = date;
        this.status = status;
        this.place = place;
        this.tag = tag;
        this.postShortDescription = postShortDescription;
        this.websiteImage = websiteImage;
        this.content = content;
        this.postSlug = postSlug;
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

    public int getPlace() {
        return place;
    }

    public void setPlace(int place) {
        this.place = place;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getPostShortDescription() {
        return postShortDescription;
    }

    public void setPostShortDescription(String postShortDescription) {
        this.postShortDescription = postShortDescription;
    }

    public String getWebsiteImage() {
        return websiteImage;
    }

    public void setWebsiteImage(String websiteImage) {
        this.websiteImage = websiteImage;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
    

    public String getPostSlug() {
        return postSlug;
    }

    public void setPostSlug(String postSlug) {
        this.postSlug = postSlug;
    }

}
