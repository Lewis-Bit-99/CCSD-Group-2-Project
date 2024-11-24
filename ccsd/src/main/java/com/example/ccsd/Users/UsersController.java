//usersController.java

package com.example.ccsd.Users;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    private usersService usersService;

    @GetMapping
    public List<users> getAllUsers() {
        return usersService.getAllUsers();
    }

    // get user by id 
    @GetMapping("/{id}")
    public ResponseEntity<users> getUserById(@PathVariable String UserId) {
        return usersService.getUserById(UserId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    
 @PostMapping
    public ResponseEntity<Map<String, Object>> addUser(
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            @RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("phoneNumber") String phoneNumber,
            @RequestParam("address") String address,
            @RequestParam("role") String role,
            @RequestParam("username") String username,
            @RequestParam("dob") String dob,
           
           
            @RequestParam("profPic") MultipartFile profPic) throws IOException {

       
        byte[] imageBytes = profPic.getBytes();  // Get image data

        
        users users = new users();
        users.setEmail(email);
        users.setPassword(password);
        users.setFirstName(firstName);
        users.setLastName(lastName);
        users.setPhoneNumber(phoneNumber);
        users.setAddress(address);
        users.setRole(role);
        users.setUsername(username);
        users.setDob(dob);
       
      
        users.setProfPic(imageBytes); 


        users savedusers = usersService.addUser(users);

        // Return a response
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("users", savedusers);
        
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<users> updateUser(@PathVariable String id, @RequestBody users usersDetails) {
        users updatedusers = usersService.updateUser(id, usersDetails);
        if (updatedusers != null) {
            return ResponseEntity.ok(updatedusers);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable String userId) {
        usersService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }

   


    
}
