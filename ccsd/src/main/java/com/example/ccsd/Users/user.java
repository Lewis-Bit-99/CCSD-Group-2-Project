package com.example.ccsd.Users;

public class user {

    private String username;
    private int id;
    private String email;
    private String password;

    // Constructor
    public user(String username, int id, String email, String password) {
        
        this.username = username;
        this.id = id;
        this.email = email;
        this.password = password;
      
    }

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

   
}
