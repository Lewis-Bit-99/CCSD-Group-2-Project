package com.example.ccsd.Gallery;


import java.sql.Date;

import org.springframework.data.annotation.Id;

public class gallery {

    @Id
    private String Id;
    private String image;
    private Date date;
    private String info;
    
   
    // Constructors

    public gallery(){}

    public gallery(String image, Date date, String info){
        this.image = image;
        this.date = date;
        this.info = info;
    }

    public String getId(){
        return Id;
    }
    public String getImage(){
        return image;
    }

    public Date getDate(){
        return date;
    }
    public void setDate(Date date){
        this.date = date;
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
