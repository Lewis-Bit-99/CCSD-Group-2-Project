import React, { useState } from 'react';
import { Box, Button, FormControl, InputAdornment, Select, MenuItem, TextField, FilledInput, InputLabel } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import Header from "../../../components/Header";
import SaveItemsAdmin from '../../saveItemAdmin';
import Input from '@mui/material/Input';

const AddWebsiteGallery = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState('');
  const [tag, setTag] = useState('');
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [place, setPlace] = useState('');

  // Convert image to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]); // Extract Base64 string
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle file input change (image upload)
  const handleImageChange = async (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);

    if (selectedImage) {
      try {
        const base64 = await convertToBase64(selectedImage);
        setImageBase64(base64); // Set Base64 representation
      } catch (error) {
        console.error("Error converting image to Base64:", error);
      }
    }
  };

  // Handle form submission with Base64 image in FormData
  const handleAddGallery = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("tag", tag);
    formData.append("title", title);
    formData.append("status", status);
    formData.append("place", place);
    formData.append("image", imageBase64); // Append Base64 string for the image

    try {
      const success = await SaveItemsAdmin.addGalleryAdmin(formData); // Send formData to backend

      if (success) {
        navigate("/website-components-admin"); // Redirect on success
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
      <Box component="form" onSubmit={handleAddGallery} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
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
        {/* Image Upload */}
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

        {/* Image Preview (Optional) */}
        {imageBase64 && (
          <Box sx={{ width: '100%', marginTop: 2 }}>
            <img
              src={`data:image/jpeg;base64,${imageBase64}`}
              alt="Preview"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        )}

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
