package com.example.ccsd.WebsiteImages;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "WebsiteImages")
public class WebsiteImages {
    @Id
    private String id;
    private String title;     // Matches "title" from frontend
    private String tag;       // Matches "tag" from frontend
    private String status;    // Matches "status" from frontend
    private int place;        // Matches "place" from frontend
    private String imageUrl;  // URL of the uploaded image

    // Constructor
    public WebsiteImages() {}

    public WebsiteImages(String title, String tag, String status, int place, String imageUrl) {
        this.title = title;
        this.tag = tag;
        this.status = status;
        this.place = place;
        this.imageUrl = imageUrl;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getPlace() {
        return place;
    }

    public void setPlace(int place) {
        this.place = place;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
