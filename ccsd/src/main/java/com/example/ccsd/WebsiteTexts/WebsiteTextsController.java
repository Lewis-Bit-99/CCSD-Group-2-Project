package com.example.ccsd.WebsiteTexts;

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
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

//import org.springframework.web.multipart.MultipartFile;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/website-texts")
public class WebsiteTextsController {

    @Autowired
    private WebsiteTextsService websiteTextsService;

    @GetMapping
    public List<WebsiteTexts> getAllText() {
        return websiteTextsService.getAllText();
    }

    @GetMapping("/{id}")
    public ResponseEntity<WebsiteTexts> getTextById(@PathVariable String id) {
        return websiteTextsService.getTextById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public WebsiteTexts addText(@RequestBody WebsiteTexts websiteTexts) {
        return websiteTextsService.addText(websiteTexts);
    }

  /// second try
//   @PostMapping
//   public ResponseEntity<Map<String, Object>> addText(
//           @RequestParam("title") String title,
//           @RequestParam("postSlug") String postSlug,
//           @RequestParam("postShortDescription") String postShortDescription,
//           @RequestParam("tag") String tag,
//           @RequestParam("place") String place,
//           @RequestParam("date") String date,
//           @RequestParam("status") String status) throws IOException {

//       // Convert the image to a byte array
//       byte[] imageBytes = image.getBytes();  // Get image data

//       // Create a new Website Texts instance
//       WebsiteTexts websitetexts = new WebsiteTexts();

//       websitetexts.setTitle(title);
//       websitetexts.setPostSlug(postSlug);
//       websitetexts.setPostShortDescription(postShortDescription);
//       websitetexts.setTag(tag);
//       websitetexts.setPlace(place);
//       websitetexts.setDate(date);
//       websitetexts.setStatus(status);
//       websitetexts.setImage(imageBytes);  // Store image as byte array

//       // Save the text in MongoDB
//       WebsiteTexts savedTexts = websiteTextsService.addText(websitetexts);

//       // Return a response
//       Map<String, Object> response = new HashMap<>();
//       response.put("success", true);
//       response.put("texts", savedTexts);
      
//       return ResponseEntity.ok(response);
//   }
  //////////////////////////////////////////////////////////////////


    @PutMapping("/{id}")
    public ResponseEntity<WebsiteTexts> updateText(@PathVariable String id, @RequestBody WebsiteTexts textDetails) {
        WebsiteTexts updatedText = websiteTextsService.updateText(id, textDetails);
        if (updatedText != null) {
            return ResponseEntity.ok(updatedText);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteText(@PathVariable String id) {
        websiteTextsService.deleteText(id);
        return ResponseEntity.noContent().build();
    }
}