package com.example.ccsd.Users;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    private usersService userService; // Service to handle business logic for users

    // Get all users
    @GetMapping
    public List<user> getAllUsers() {
        return userService.getAllUsers();
    }

    // Get a user by ID
    @GetMapping("/{id}")
    public ResponseEntity<user> getUserById(@PathVariable String id) {
        Optional<user> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // Create a new user
    @PostMapping
    public ResponseEntity<user> addUser(@RequestBody user user) {
        if (user.getEmail() == null || user.getPassword() == null) {
            return ResponseEntity.badRequest().build(); // Return bad request if missing email or password
        }
        user createdUser = userService.adduser(user);
        return ResponseEntity.ok(createdUser); // Return created user with status 200 OK
    }

    // Update an existing user
    // @PostMapping("/{id}")
    // public ResponseEntity<user> updateUser(@PathVariable String id, @RequestBody user userDetails) {
    //     Optional<user> updatedUser = userService.getUserById(id);
    //     if (updatedUser.isPresent()) {
    //         user currentUser = updatedUser.get();
    //         // Update details (email, password, etc.)
    //         currentUser.setUsername(userDetails.getUsername());
    //         currentUser.setEmail(userDetails.getEmail());
    //         currentUser.setPassword(userDetails.getPassword());
    //         return ResponseEntity.ok(userService.adduser(currentUser)); // Save updated user
    //     }
    //     return ResponseEntity.notFound().build(); // If user not found, return not found
    // }

    // Delete a user by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable String id) {
        userService.deleteuser(id);
        return ResponseEntity.noContent().build();
    }
}
