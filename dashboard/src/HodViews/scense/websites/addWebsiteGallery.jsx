  import React, { useState } from 'react';
  import { Box, Button, FormControl, InputAdornment, Select, MenuItem, TextField, FilledInput, InputLabel } from "@mui/material";
  import { useNavigate } from 'react-router-dom';
  import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
  import Header from "../../../components/Header";
  import SaveItemsAdmin from '../../saveItemAdmin';
  import Input from '@mui/material/Input'; // Add this line

  const AddWebsiteGallery = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [tag, setTag] = useState('');
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');
    const [place, setPlace] = useState('');
    const [postShortDescription, setPostShortDescription] = useState('');
    const [postSlug, setPostSlug] = useState('');
    const [content, setContent] = useState('');

    // Handle file input change (image upload)
    const handleImageChange = (event) => {
      const selectedImage = event.target.files[0];
      setImage(selectedImage);
    };

    // Handle form submission
    const handleAddBlog = async (event) => {
      event.preventDefault();

      const galleryData = {
        tag,
        title,
        status,
        place,
        postShortDescription,
        postSlug,
        content,
        image: image ? URL.createObjectURL(image) : null, // If you are sending a base64 string or a file URL
      };

      try {
        const success = await SaveItemsAdmin.addGalleryAdmin(galleryData);  // Calling the backend function

        if (success) {
          navigate("/website-components-admin");  // Redirect on success
        } else {
          alert("Error saving data");
        }
      } catch (error) {
        console.error("Saving Error:", error);
        alert("An error occurred while saving.");
      }
    };

    return (
      <Box>
        <Header title="Add New Gallery" subtitle="Please Fill All the Fields" />

        {/* Form */}
        <Box component="form" onSubmit={handleAddBlog} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            label="Please Enter Image Title"
            variant="filled"
            sx={{ width: '30.5%' }}
          />

          <FormControl sx={{ width: '15.5%' }} variant="filled">
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value={0}>Draft</MenuItem>
              <MenuItem value={1}>Publish</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: '60%' }} variant="filled">
            <InputLabel htmlFor="filled-adornment-address">Tags</InputLabel>
            <FilledInput
              onChange={(e) => setTag(e.target.value)}
              value={tag}
              id="tag"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                    <SmartToyOutlinedIcon />
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl sx={{ width: '15.5%' }} variant="filled">
            <InputLabel id="place">Text Place</InputLabel>
            <Select
              labelId="place"
              id="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            >
              {[...Array(12).keys()].map(i => (
                <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ width: '45%' }} variant="filled">
            <Input
              accept="image/*"
              id="image-upload"
              type="file"
              onChange={handleImageChange}
              endAdornment={
                <InputAdornment position="end">
                    <SmartToyOutlinedIcon />
                </InputAdornment>
              }
            />
          </FormControl>

          {/* Save Button */}
          <Button
            type="submit"
            sx={{ width: '46%', marginTop: '20px' }}
            color="success"
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </Box>
    );
  };

  export default AddWebsiteGallery;
