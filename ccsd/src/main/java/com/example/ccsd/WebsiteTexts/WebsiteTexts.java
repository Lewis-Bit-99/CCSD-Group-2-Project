package com.example.ccsd.WebsiteTexts;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "websiteTexts")
public class WebsiteTexts {
    @Id
    private String id;
    private String title;
    private String content;
    private String metaDescription;

    public WebsiteTexts(){
    }

    public WebsiteTexts(String title, String content, String metaDescription){
        this.title = title;
        this.content = content;
        this.metaDescription = metaDescription;
    }

    public String getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public String getMetaDescription() {
        return metaDescription;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setMetaDescription(String metaDescription) {
        this.metaDescription = metaDescription;
    }
}