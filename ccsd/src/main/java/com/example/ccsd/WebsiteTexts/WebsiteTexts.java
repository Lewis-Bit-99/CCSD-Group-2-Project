package com.example.ccsd.WebsiteTexts;
public class WebsiteTexts {

    private String title;
    private String content;
    private String metaDescription;

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

    public static void main(String[] args) {
        WebsiteTexts txt = new WebsiteTexts();
        txt.setTitle("Syafig");
        txt.setContent("Hello"+"!");
        txt.setMetaDescription("Lalalalala");
        System.out.println("Title: " + txt.getTitle());
        System.out.println("Content: " + txt.getContent());
        System.out.println("Meta Description: " + txt.getMetaDescription());
    }
}