import React, { useState } from 'react';
import { Box, Button, FormControl, FormHelperText, Input, InputAdornment, Select, MenuItem, TextField, IconButton, FilledInput, InputLabel, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import Header from "../../../components/Header";
import SaveItemsAdmin from '../../saveItemAdmin';

const AddWebsiteGallery = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [image, setImage] = useState(null);
  const [tag, setTag] = useState('');
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const [openAiImage, setOpenAiImage] = useState(false);
  const [place, setPlace] = useState('');
  const [postShortDescription, setPostShortDescription] = useState('');
  const [postSlug, setPostSlug] = useState('');
  const [content, setContent] = useState('');

  // Handle AI image dialog open and close
  const functionOpenAiImage = () => setOpenAiImage(true);
  const functionCloseAiImage = () => setOpenAiImage(false);

  // Handle file input change (image upload)
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  // Handle form submission
  const handleAddBlog = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('place', place);
    formData.append('postShortDescription', postShortDescription);
    formData.append('tag', tag);
    formData.append('title', title);
    formData.append('postSlug', postSlug);
    formData.append('content', content);
    formData.append('status', status);
    formData.append('date', date);
    if (image) {
      formData.append('image', image); // Appending image file
    }

    try {
      const success = await SaveItemsAdmin.addGalleryAdmin(formData);  // Calling the backend function
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
      {/* AI Image Generator Dialog */}
      <Dialog open={openAiImage} fullWidth maxWidth="lg">
        <DialogTitle>AI Image Generator or Edit</DialogTitle>
        <DialogContent>
          <Stack spacing={2} margin={2}>
            {/* Add editor or other components here */}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button color='success' variant='contained' onClick={functionCloseAiImage}>Use Image</Button>
          <Button color='error' variant='contained' onClick={functionCloseAiImage}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Header */}
      <Header title="Add New Gallery" subtitle="Please Fill All the Fields" />

      {/* Form */}
      <Box component="form" onSubmit={handleAddBlog} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2}}>
        <TextField
          onChange={(e) => setId(e.target.value)}
          value={id}
          label="ID"
          variant="filled"
          sx={{ width: '30.5%' }}
        />

        <TextField
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          label="Please Enter Image Title"
          variant="filled"
          sx={{ width: '30.5%' }}
        />

        <FormControl sx={{ width: '30.5%' }} variant="filled">
          <FilledInput
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
            id="date"
          />
          <FormHelperText id="filled-dob-helper-text">Publish Date</FormHelperText>
        </FormControl>

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
                Use AI to Generate SEO Tags
                <IconButton onClick={functionOpenAiImage}>
                  <SmartToyOutlinedIcon />
                </IconButton>
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
                Use AI to Generate or Edit Image
                <IconButton onClick={functionOpenAiImage}>
                  <SmartToyOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>Blog Header Image</FormHelperText>
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
