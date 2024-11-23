package com.example.ccsd.Products;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "products")
public class products{      
    @Id
    private String id;
    private String title;
    private String status;
    private int place;
    private String tag;
    private String postShortDescription;
    private String image;
    private String postSlug;

    public products(){}
    public products(String id,String title, 
                    String status, int place, String tag, 
                    String postShortDescription, String image,  String postSlug) {
        this.id = id;             
        this.title = title;
        this.status = status;
        this.place = place;
        this.tag = tag;
        this.postShortDescription = postShortDescription;
        this.image = image;
        this.postSlug = postSlug;
    }



    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getPostShortDescription() {
        return postShortDescription;
    }

    public void setPostShortDescription(String postShortDescription) {
        this.postShortDescription = postShortDescription;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getPostSlug() {
        return postSlug;
    }

    public void setPostSlug(String postSlug) {
        this.postSlug = postSlug;
    }

}
