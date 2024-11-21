package com.example.ccsd.WebsiteTexts;

public class WebsiteTexts {

    private String title;
    private String content;
    private String metaDescription;

    public void WebsiteImages(String title, String content, String metaDescription){
        this.title = title;
        this.content = content;
        this.metaDescription = metaDescription;
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