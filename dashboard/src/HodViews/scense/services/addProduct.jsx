import React, { useState, useRef } from 'react';
import { Box, useTheme, Button, DialogActions, Dialog, DialogContent, DialogTitle, Stack, FormControl, FilledInput, InputLabel, MenuItem, Select, FormHelperText, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { tokens } from "../../../base/theme";
import Header from "../../../components/Header";
import CK from '../../../Editor/ck';

const AddProduct = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [image, setImage] = useState(null);
    const [postShortDescription, setPostShortDescription] = useState(null);
    const [tag, setTag] = useState(null);
    const [place, setPlace] = useState(null);
    const [title, setTitle] = useState(null);
    const [postSlug, setPostSlug] = useState(null);
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();
    const editor = useRef(null);

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
      
        try {
            const success = await SaveItemsAdmin.addProductAdmin(place, postShortDescription, tag, title, postSlug, content, status, image);
          
            if (success) {
                navigate("/services");
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
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }} component="form" noValidate>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    label="Enter Product Title"
                    id="title"
                    sx={{ m: 1, width: '30.5%' }}
                    variant="filled"
                />
                <TextField
                    onChange={(e) => setPostSlug(e.target.value)}
                    label="Enter Product Slug"
                    id="Slug"
                    sx={{ m: 1, width: '30.5%' }}
                    variant="filled"
                />
                <FormControl sx={{ m: 1, width: '30.5%' }} variant="filled">
                    <FilledInput
                        id='date'
                        type='date'
                    />
                    <FormHelperText id="filled-dob-helper-text">Publish Date</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, width: '15.5%' }} variant="filled">
                    <InputLabel id="status">Status</InputLabel>
                    <Select
                        labelId="status"
                        id="status"
                        value={status}
                        label="status"
                        onChange={handleChange}
                    >
                        <MenuItem value={0}>Draft</MenuItem>
                        <MenuItem value={1}>Publish</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: '15.5%' }} variant="filled">
                    <InputLabel id="place">Product Place</InputLabel>
                    <Select
                        labelId="place"
                        id="place"
                        value={place}
                        label="place"
                        onChange={handleChangeplace}
                    >
                        {[...Array(12)].map((_, index) => (
                            <MenuItem key={index + 1} value={index + 1}>{index + 1}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: '60%' }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-address">Tags</InputLabel>
                    <FilledInput
                        onChange={(e) => setTag(e.target.value)}
                        id='tag'
                        type='text'
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '93%' }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-short-description">Blog Short Description</InputLabel>
                    <FilledInput
                        onChange={(e) => setPostShortDescription(e.target.value)}
                        id='short-description'
                        type='text'
                        multiline
                        rows={3}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '45%' }} variant="filled">
                    <input
                        accept="image/*"
                        id="image-upload"
                        type="file"
                        onChange={handleImageChange}
                    />
                    <FormHelperText id="image-upload-helper-text">Blog Header Image</FormHelperText>
                </FormControl>
                <Box sx={{ m: 1, width: '93%', height: 600, color: theme.palette.mode === 'dark' ? 'black' : 'inherit' }}>
                    <CK />
                </Box>
                <Button
                    type="submit"
                    sx={{ m: 1, width: '46%' }}
                    color='success'
                    variant="contained"
                >
                    Save
                </Button>
            </Box>
        </Box>
    );
};

export default AddProduct;
