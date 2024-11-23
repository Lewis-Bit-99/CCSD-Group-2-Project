package com.example.ccsd.WebsiteTexts;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "websiteTexts")
public class WebsiteTexts {
    private String title;
    private String tag;
    private int status;
    private String postShortDescription;

    public WebsiteTexts(){
    }

    public WebsiteTexts(String title, String tag, int status, String postShortDescription){
        this.title = title;
        this.tag = tag;
        this.status = status;
        this.postShortDescription = postShortDescription;
    }

    public String getTitle(){
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public String getTag(){
        return tag;
    }
    public void setTag(String tag) {
        this.tag = tag;
    }

    public int getStatus(){
        return status;
    }
    public void setStatus(int status){
        this.status = status;
    }

    public String getPostShortDescription() {
        return postShortDescription;
    }
    public void setPostShortDescription(String postShortDescription) {
        this.postShortDescription = postShortDescription;
    }
}