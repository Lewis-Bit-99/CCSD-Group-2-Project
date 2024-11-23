package com.example.ccsd.WebsiteTexts;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "websiteTexts")
public class WebsiteTexts {
    private String title;
    private String tag;
    private String status;
    private String postShortDescription;

    public WebsiteTexts(){
    }

    public WebsiteTexts(String title, String status, String tag, String postShortDescription){
        this.title = title;
        this.tag = tag;
        this.postShortDescription = postShortDescription;
        this.status = status;
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

    public String getStatus(){
        return status;
    }
    public void setStatus(String status){
        this.status = status;
    }

    public String getPostShortDescription() {
        return postShortDescription;
    }
    public void setPostShortDescription(String postShortDescription) {
        this.postShortDescription = postShortDescription;
    }
}