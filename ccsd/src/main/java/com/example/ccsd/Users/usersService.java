package com.example.ccsd.Users;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class usersService {

    @Autowired
    private userRepository userRepository;

    // Getting all users
    public List<user> getAllUsers() {
        return userRepository.findAll();
    }

    // Getting a single user by ID
    public Optional<user> getUserById(String id) {
        return userRepository.findById(id);
    }

    // Creating a new user in the repository
    public user adduser(user user) {
        if (user.getEmail() == null || user.getPassword() == null) {
            // Ensure email and password are present
            throw new IllegalArgumentException("Email and Password must not be null");
        }
        return userRepository.save(user);
    }

    // Deleting a user by ID
    public void deleteuser(String id) {
        Optional<user> user = userRepository.findById(id);
        if (user.isPresent()) {
            userRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("User not found");
        }
    }

    // Optionally, you can add a method to update a user with email and password
    public user updateuser(String id, user userDetails) {
        Optional<user> existingUserOpt = userRepository.findById(id);
        if (existingUserOpt.isPresent()) {
            user existingUser = existingUserOpt.get();
            // Update user details
            existingUser.setUsername(userDetails.getUsername());
            existingUser.setEmail(userDetails.getEmail());  // Ensure email is updated
            existingUser.setPassword(userDetails.getPassword());  // Ensure password is updated
            return userRepository.save(existingUser);
        } else {
            throw new IllegalArgumentException("User not found");
        }
    }
}
