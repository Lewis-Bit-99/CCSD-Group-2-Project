package com.example.ccsd.Gallery;

import org.springframework.data.annotation.Id;

public class gallery {

    @Id
    private String id;
    private String image;
    private String tag;
    private String title;
    private String status;
    private String place;
    private String postShortDescription;
    private String postSlug;
    private String content;

    // Constructors
    public gallery() {}

    public gallery(String image, String tag, String title, String status, String place, String postShortDescription, String postSlug, String content) {
        this.image = image;
        this.tag = tag;
        this.title = title;
        this.status = status;
        this.place = place;
        this.postShortDescription = postShortDescription;
        this.postSlug = postSlug;
        this.content = content;
    }

    // Getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getPostShortDescription() {
        return postShortDescription;
    }

    public void setPostShortDescription(String postShortDescription) {
        this.postShortDescription = postShortDescription;
    }

    public String getPostSlug() {
        return postSlug;
    }

    public void setPostSlug(String postSlug) {
        this.postSlug = postSlug;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
