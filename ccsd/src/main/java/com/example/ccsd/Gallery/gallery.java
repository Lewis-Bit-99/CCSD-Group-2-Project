package com.example.ccsd.Gallery;


import java.util.Base64;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Gallery")
public class gallery {

    //field
    @Id
    private String id;
    private String place;
    private String postShortDescription;
    private String tag;
    private String title;
    private String postSlug;
    private String content;
    private String status;
    private String date;
    private byte[] image;
    private String image64String;
    
    //Constructors
    public gallery(){}

    public gallery
    (String id, String place, String postShortDescription, String tag, String title, String postSlug, String content, 
    String status, String date, byte[] image) {
    {
        this.id = id;
        this.place = place;
        this.postShortDescription = postShortDescription;
        this.tag = tag;
        this.title = title;
        this.postSlug = postSlug;
        this.content = content;
        this.status = status;
        this.date = date;
        this.image = image;
    }
}
    public String getImageAsBase64(){
        return image != null ? Base64.getEncoder().encodeToString(image) : null;
    }

    public void setImage64String(String image64String) {
        this.image64String = image64String;   // Set Base64 string
    }

    public String getImage64String() {
        return this.image64String;  // Return Base64 string
    }

    //getter method
    public String getId(){
        return id;
    }

    //setter method
    public void setId(String id){
        this.id = id;
    }

    public String getPlace(){
        return place;
     }

     public void setPlace(String place){
        this.place = place;
    }

    public String getpostShortDescription(){
        return postShortDescription;
    }

    public void setpostShortDescription(String postShortDescription){
        this.postShortDescription = postShortDescription;
    }

    public String getTag(){
        return tag;
     }

     public void setTag(String tag){
        this.tag = tag;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getPostSlug(){
        return postSlug;
     }

     public void setPostSlug(String postSlug){
        this.postSlug = postSlug;
    }

    public String getContent(){
        return content;
     }

     public void setContent(String content){
        this.content = content;
    }

    public String getStatus(){
        return status;
     }

     public void setStatus(String status){
        this.status = status;
    }

    public String getDate(){
        return date;
    }

    public void setDate(String date){
        this.date = date;
    }

    public byte[] getimage(){
        return image;
    }

    public void setimage(byte[] image){
        this.image = image;
    }

}


