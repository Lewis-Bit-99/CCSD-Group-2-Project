import React, { useState } from 'react';
import { Box, Typography, useTheme, Button, Grid } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { tokens } from "../../../base/theme";
import Header from "../../../components/Header";
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhotoCamera from '@mui/icons-material/PhotoCamera';  // Import the PhotoCamera icon
import { useNavigate } from 'react-router-dom';
import SaveItemsAdmin from '../../saveItemAdmin';

const AddTeam = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [dob, setDob] = useState("");
    const [role, setRole] = useState("");
    const [userName, setuserName] = useState("");
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };

    const handleAddTeam = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        try {
          const success = await SaveItemsAdmin.addTeamSave(email, password, userName );
          if (success) {
            navigate("/dashboard-admin");
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
            <Header title="Add Team Member" subtitle="Enter New Member Details" />
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }} component="form" noValidate onSubmit={handleAddTeam}>
                <TextField
                    onChange={(e) => setuserName(e.target.value)}
                    label="Enter Desired User Name"
                    id="user_name"
                    sx={{ m: 1, width: '30%' }}
                    variant="filled"
                />
                <TextField
                    onChange={(e) => setRole(e.target.value)}
                    label="Enter Team Member Role"
                    id="role"
                    sx={{ m: 1, width: '30%' }}
                    variant="filled"
                />
                <FormControl sx={{ m: 1, width: '30%' }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                    <FilledInput
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '30%' }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
                    <FilledInput
                        onChange={(e) => setEmail(e.target.value)}
                        id='email'
                        type='email'
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label="Envelope"
                                    edge="end"
                                >
                                    <EmailIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '30%' }} variant="filled">
                    <FilledInput
                        onChange={(e) => setDob(e.target.value)}
                        id='dob'
                        type='date'
                    />
                    <FormHelperText id="filled-dob-helper-text">Date of Birth</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, width: '93%' }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-address">Address</InputLabel>
                    <FilledInput
                        onChange={(e) => setAddress(e.target.value)}
                        id='address'
                        type='text'
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label="address"
                                    edge="end"
                                >
                                    <LocationOnIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Save
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default AddTeam;
