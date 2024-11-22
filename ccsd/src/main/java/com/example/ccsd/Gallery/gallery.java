package com.example.ccsd.Gallery;



import java.awt.Image;
import java.sql.Date;

import org.springframework.data.annotation.Id;

public class gallery {

    @Id
    private String Id;
    private Image image;
    private Date date;
    private String info;
    
   
    // Constructors

    public gallery(){}

    public gallery(Image image, Date date, String info){
        this.image = image;
        this.date = date;
        this.info = info;
    }

    public String getId(){
        return Id;
    }
    public Image getImage(){
        return image;
    }

    public Date date(){
        return date;
    }
    public void setDate(Date date){
        this.date = date;
    }
    public void setImage(Image image){
        this.image = image;
    }
    
    public String getInfo(){
        return info;
    }

    public void setInfo(String info){
        this.info = info;
    }

    
    }
