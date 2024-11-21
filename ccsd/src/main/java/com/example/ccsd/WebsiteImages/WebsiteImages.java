
package com.example.ccsd.WebsiteImages;

public class WebsiteImages {
    private String imageUrl;  // URL of the image
    private String altText;   // Alternative text for the image
    private int width;        // Width in pixels
    private int height;       // Height in pixels

    // Constructor to initialize the object
    public WebsiteImages(String imageUrl, String altText, int width, int height) {
        this.imageUrl = imageUrl;
        this.altText = altText;
        this.width = width > 0 ? width : 0; // Ensure width is positive
        this.height = height > 0 ? height : 0; // Ensure height is positive
    }

    public String getImageUrl() {
        return imageUrl;
}
public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    public String getAltText() {
        return altText;
    }

    public void setAltText(String altText) {
        this.altText = altText;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        if (width > 0) {
            this.width = width;
        } else {
            System.out.println("Width must be positive!");
        }
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        if (height > 0) {
            this.height = height;
        } else {
            System.out.println("Height must be positive!");
        }
    }

    
}



