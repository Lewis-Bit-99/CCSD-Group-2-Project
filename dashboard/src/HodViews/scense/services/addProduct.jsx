import React, { useState, useEffect, useRef, Component } from 'react';
import { Box, useTheme, Button, DialogActions, Dialog, DialogContent, DialogContentText, DialogTitle, Stack, Modal } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import { tokens } from "../../../base/theme";
import Header from "../../../components/Header";
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import SaveItemsAdmin from '../../saveItemAdmin';
import GetItemsAdmin from '../../getItemAdmin';
import Select from '@mui/material/Select';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CK from '../../../Editor/ck';

const AddProduct = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const colors = tokens(theme.palette.mode);
    const [image, setImage] = useState(null);
    const [postShortDescription, setPostShortDescription] = useState(null);
    const [tag, setTag] = useState(null);
    const [place, setPlace] = useState(null);
    const [title, setTitle] = useState(null);
    const [postSlug, setPostSlug] = useState(null);
    const [status, setStatus] = useState(null);


    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    const handleChangeplace = (event) => {
        setPlace(event.target.value);
    };

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };

    const handleAddBlog = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
      
        const productData = {
            tag,
            title,
            status,
            place,
            postShortDescription,
            postSlug,
            image: image ? URL.createObjectURL(image) : null, // If you are sending a base64 string or a file URL
          };
      
        try {
            const success = await SaveItemsAdmin.addProductAdmin(productData);
          
            if (success) {
                navigate("/add-product");
            } else {
                alert("Error Saving data");
            }
        } catch (error) {
            console.error("Saving Error:", error);
            alert("An error occurred while saving.");
        }
    };

    return (
        <Box>
          <Header title="Add Product" subtitle="Please Fill All the Fields" />
    
          {/* Form */}
          <Box component="form" onSubmit={handleAddBlog} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              label="Enter Product Title"
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
              <InputLabel htmlFor="tags">Tags</InputLabel>
              <FilledInput
                onChange={(e) => setTag(e.target.value)}
                value={tag}
                id="tag"
                type="text"
                
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '60%' }} variant="filled">
              <InputLabel htmlFor="short-description">Description</InputLabel>
              <FilledInput
                onChange={(e) => setPostShortDescription(e.target.value)}
                value={postShortDescription}
                id="postShortDescription"
                type="text"
                
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

export default AddProduct;
