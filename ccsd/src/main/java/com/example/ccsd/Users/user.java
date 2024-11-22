package com.example.ccsd.Users;

public class user {

    private String username;
    private int user_id;
    private String email;
    private String password;

    // Constructor
    public user(String username, int id, String email, String password) {
        
        this.username = username;
        this.user_id = user_id;
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

    public int getUser_id() {
        return user_id;
    }

    public void setUser_Id(int user_id) {
        this.user_id = user_id;
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
