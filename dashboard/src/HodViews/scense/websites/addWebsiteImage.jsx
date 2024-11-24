import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";
import FilledInput from '@mui/material/FilledInput';
import Header from "../../../components/Header";
import { useNavigate } from 'react-router-dom';
import SaveItemsAdmin from '../../saveItemAdmin';

const AddWebsiteText = () => {
    const [postShortDescription, setPostShortDescription] = useState('');
    const [tag, setTag] = useState('');
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState(''); // Default to '' or 'Draft'
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    const handleAddWebsiteText = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Basic client-side validation
        if (!title || !tag || !postShortDescription || !status) {
            alert('Please fill in all fields');
            return;
        }

        try {
            const success = await SaveItemsAdmin.addWebsiteTextAdmin(postShortDescription, tag, title, status);

            if (success) {
                navigate("/website-components-admin");
            } else {
                // Log more details if saving fails
                console.error("Failed to save website text - Server responded with failure");
                alert("Error Saving data");
            }
        } catch (error) {
            // Improved error logging
            console.error("Saving Error:", error);
            if (error.response) {
                // If the error is from an API request
                console.error("API Error Response:", error.response);
                alert(`Error: ${error.response.data.message || "An error occurred while saving."}`);
            } else {
                // If it's a network or unexpected error
                alert("An unexpected error occurred while saving.");
            }
        }
    };

    return (
        <Box>
            <Header title="Add Website Text" subtitle="Please Fill All the Fields" />
                
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }} component="form" noValidate onSubmit={handleAddWebsiteText}>
                <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    label="Enter Text Title"
                    id="title"
                    sx={{ m: 1, width: '30.5%' }}
                    variant="filled"
                    required
                />

                <FormControl sx={{ m: 1, width: '15.5%' }} variant="filled">
                    <InputLabel id="status">Status</InputLabel>
                    <Select
                        labelId="status"
                        id="status"
                        value={status}
                        label="Status"
                        onChange={handleChange}
                    >
                        <MenuItem value="0">Draft</MenuItem>
                        <MenuItem value="1">Publish</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: '60%' }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-tag">Tags</InputLabel>
                    <FilledInput
                        onChange={(e) => setTag(e.target.value)}
                        id="tag"
                        type="text"
                    />
                </FormControl>

                <TextField
                    value={postShortDescription}
                    onChange={(e) => setPostShortDescription(e.target.value)}
                    id="short-description"
                    label="Short Text"
                    variant="filled"
                    sx={{ m: 1, width: '93%' }}
                    multiline
                    rows={3}
                    required
                />

                <Button
                    type="submit"
                    sx={{ m: 1, width: '46%' }}
                    color="success"
                    variant="contained"
                    onClick={handleAddWebsiteText}
                >
                    Save
                </Button>
            </Box>
        </Box>
    );
};

export default AddWebsiteText;
