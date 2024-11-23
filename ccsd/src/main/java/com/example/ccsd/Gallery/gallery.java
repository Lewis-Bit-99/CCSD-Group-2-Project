package com.example.ccsd.Gallery;


import java.sql.Date;

import org.springframework.data.annotation.Id;

public class gallery {

    @Id
    private String Id;
    private String image;
    private String tag;
    private String title;
    private String status;
    private Date date;
    private String place;
    private String postShortDescription;
    private String postSlug;
    private String content;
    
   
    // Constructors

    public gallery(){}

    public gallery(String image, String tag, String title, String status, Date date, String place, String postShortDescription, String postSlug, String content){
        this.image = image;
        this.tag = tag;
        this.title = title;
        this.status = status;
        this.date = date;
        this.place = place;
        this.postShortDescription = postShortDescription;
        this.postSlug = postSlug;
        this.content = content;
    }

    public String getId(){
        return Id;
    }
    public String getImage(){
        return image;
    }

    public String getTag(){
        return tag;
    }

    public String getTitle(){
        return title;
    }

    public String getStatus(){
        return status;
    }

    public Date getDate(){
        return date;
    }

    public String getPlace(){
        return place;
    }

    public String getPostShortDescription(){
        return postShortDescription;
    }

    public String getPostSlug(){
        return postSlug;
    }

    public String getContent(){
        return content;
    }

    public void setImage(String image){
        this.image = image;
    }

    public void setTag(String tag){
        this.tag = tag;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public void setStatus(String status){
        this.status = status;
    }

    public void setDate(Date date){
        this.date = date;
    }

    public void setPlace(String place){
        this.place = place;

    }
   
    public void setPostShortDescription(String postShortDescription){
        this.postShortDescription = postShortDescription;
    }

    public void setPostSlug(String postSlug){
        this.postSlug = postSlug;
    }

    public void setContent(String content){
        this.content = content;
    }

    
    }
