import React, { useState, useRef } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  MenuItem,
  Select,
  TextField,
  FormHelperText,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import Header from '../../../components/Header';
import SaveItemsAdmin from '../../saveItemAdmin';
import { tokens } from '../../../base/theme';

const AddWebsiteImage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  // State variables
  const [imageUrl, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [tag, setTag] = useState('');
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [place, setPlace] = useState('');

  const editor = useRef(null);

  // Handlers
  const handleChangeStatus = (event) => setStatus(event.target.value);
  const handleChangePlace = (event) => setPlace(event.target.value);
  const handleImageChange = (event) => setImage(event.target.files[0]);

  const handleAddBlog = async (event) => {
    event.preventDefault();
    try {
      const success = await SaveItemsAdmin.addWebsiteImageAdmin(
        place,
        tag,
        title,
        status,
        imageUrl
      );

      if (success) {
        navigate('/website-components-admin');
      } else {
        alert('Error Saving data');
      }
    } catch (error) {
      console.error('Saving Error:', error);
      alert('An error occurred while saving.');
    }
  };

  return (
    <Box>
      {/* Header */}
      <Header title="Add Image" subtitle="Please Fill All the Fields" />

      {/* Form */}
      <Box
        component="form"
        sx={{ display: 'flex', flexWrap: 'wrap' }}
        noValidate
        onSubmit={handleAddBlog}
      >
        {/* Title */}
        <TextField
          label="Enter Image Title"
          variant="filled"
          sx={{ m: 1, width: '30.5%' }}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Categories */}
        <FormControl sx={{ m: 1, width: '30.5%' }} variant="filled">
          <InputLabel id="categories">Categories</InputLabel>
          <Select
            labelId="categories"
            id="categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          >
            <MenuItem value={0}>Items</MenuItem>
            <MenuItem value={1}>Art</MenuItem>
          </Select>
        </FormControl>

        {/* Status */}
        <FormControl sx={{ m: 1, width: '15.5%' }} variant="filled">
          <InputLabel id="status">Status</InputLabel>
          <Select
            labelId="status"
            id="status"
            value={status}
            onChange={handleChangeStatus}
          >
            <MenuItem value={0}>Draft</MenuItem>
            <MenuItem value={1}>Publish</MenuItem>
          </Select>
        </FormControl>

        {/* Tags */}
        <FormControl sx={{ m: 1, width: '60%' }} variant="filled">
          <InputLabel htmlFor="tag">Tags</InputLabel>
          <FilledInput
            id="tag"
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                Use AI to Generate SEO Tags
                <IconButton>
                  <SmartToyOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        {/* Place */}
        <FormControl sx={{ m: 1, width: '15.5%' }} variant="filled">
          <InputLabel id="place">Text Place</InputLabel>
          <Select
            labelId="place"
            id="place"
            value={place}
            onChange={handleChangePlace}
          >
            {[...Array(12)].map((_, i) => (
              <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Image Upload */}
        <FormControl sx={{ m: 1, width: '45%' }} variant="filled">
          <input
            accept="image/*"
            id="image-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <label htmlFor="image-upload">
            <Button
              variant="contained"
              color="primary"
              component="span"
              endIcon={<SmartToyOutlinedIcon />}
            >
              Upload Image
            </Button>
          </label>
          <FormHelperText>Blog Header Image</FormHelperText>
        </FormControl>

        {/* Save Button */}
        <Button
          type="submit"
          sx={{ m: 1, width: '46%', marginTop: '20px' }}
          color="success"
          variant="contained"
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AddWebsiteImage;
