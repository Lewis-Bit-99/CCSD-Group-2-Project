package com.example.ccsd.Products;
// import java.io.File;
// import java.util.Date;

import java.util.Base64;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "products")
public class products {
    
    //field
    @Id
    private String author;   
    private String postShortDescription;
    private String tag;
    private String place;
    private String title;
    private String postSlug;
    private String content;
    private String status;
    private String dateProduct;
    private byte[] imageStore;
    private String imageStore64String;




    //Constructors
    public products() {}

    public products(String author, String postShortDescription, String tag, String place, String title, String postSlug, String content, String status, String dateProduct, byte[] imageStore) {
        this.author = author;
        this.postShortDescription = postShortDescription;
        this.tag = tag;
        this.place = place;
        this.title = title;
        this.postSlug = postSlug;
        this.content = content;
        this.status = status;
        this.dateProduct = dateProduct;
        this.imageStore = imageStore;
    }

    public String getImageAsBase64() {
        return imageStore != null ? Base64.getEncoder().encodeToString(imageStore) : null;
    }

    public void setImageStore64String(String imageStore64String) {
        this.imageStore64String = imageStore64String;  // Set Base64 string
    }

    public String getImageStore64String() {
        return this.imageStore64String;  // Return Base64 string
    }

    // setter
    public void setAuthor(String author){
        this.author = author;
    }

    public void setPostShortDescription(String postShortDescription){
         this.postShortDescription = postShortDescription;
    }

    public void setTag(String tag){
        this.tag = tag;
    }
    public void setPlace(String place){
         this.place = place;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPostSlug(String postSlug) {
        this.postSlug = postSlug;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setDateProduct(String dateProduct){
         this.dateProduct = dateProduct;
    }

    public void setImageStore(byte[] imageStore) {
        this.imageStore = imageStore;
    }


    // getter
    public String getAuthor(){
        return this.author;
    }

    public String getPostShortDescription(){
         return this.postShortDescription;
    }

    public String getTag(){
        return this.tag;
    }
    public String getPlace(){
         return this.place;
    }

    public String getTitle() {
        return this.title;
    }

    public String getPostSlug() {
        return this.postSlug;
    }

    public String getContent() {
        return this.content;
    }

    public String getStatus() {
        return this.status;
    }

    public String getDateProduct(){
         return this.dateProduct;
    }

    public byte[] getImageStore() {
        return this.imageStore;
    }

}
