import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, Button, Grid, Modal } from "@mui/material";
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
import EditItemsAdmin from '../../editItemAdmin';
import GetItemsAdmin from '../../getItemAdmin';
import { useParams } from 'react-router-dom';


const EditAgent = () => {
    const [agentDetails, setAgentDetails] = useState({});
    const [loading, setLoading] = useState(true); // New loading state
    const { user_id } = useParams();
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [userName, setuserName] = useState("");
    const [country, setCountry] = useState("");
    const [company, setCompany] = useState("");
    const [begin, setBegin] = useState("");
    const [expiry, setExpiry] = useState("");

    useEffect(() => {
      GetItemsAdmin.getAgentDataAdminEdit(user_id)
        .then((result) => {
          const agentData = result || {};
          setFirstName(agentData.first_name);
          setEmail(agentData.email);
          setLastname(agentData.last_name);
          setEmail(agentData.email);
          setuserName(agentData.user_name);
          setPhone(agentData.phone);
          setImage(agentData.photo);
          setAddress(agentData.address);
          setCountry(agentData.country);
          setCompany(agentData.company);
          setBegin(agentData.begin);
          setExpiry(agentData.expiry);

          setLoading(false); // Set loading to false when data is loaded
        })
        .catch((error) => {
          console.error("Error fetching agent data:", error);
        });
    }, [user_id]);
  

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    
    const [showPassword, setShowPassword] = React.useState(false);
    

    
    const navigate = useNavigate();
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };

    const handleEditAgent = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
      
        try {
          const success = await EditItemsAdmin.editAgentSave(email, password, firstName, lastName, phone, address, userName, image, user_id, expiry, begin, company, country);
          
          if (success) {
            navigate("/dashboard-admin");
          } else {
            // Handle login failure and display an error message to the user
            alert("Error Saving data");
          }
        } catch (error) {
          // Handle network or other errors
          console.error("Saving Error:", error);
          alert("An error occurred while saving.");
        }
      }

      return (
        <Box>
        
            <Header title="Add Agent" subtitle="Enter New Member Details" />
    
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }} component="form" noValidate onSubmit={handleEditAgent}>
                    <TextField
                    onChange={(e) => setFirstName(e.target.value)}
                    value = {firstName}
                    label="Enter Your First Name"
                    id="first_name"
                    sx={{ m: 1, width: '30%' }}
                    variant="filled"
                    />
                    <TextField
                    onChange={(e) => setuserName(e.target.value)}
                    value = {userName}
                    label="Enter Desired User Name"
                    id="user_name"
                    sx={{ m: 1, width: '30%' }}
                    variant="filled"
                    />
                    <TextField
                    onChange={(e) => setLastname(e.target.value)}
                    value = {lastName}
                    label="Enter Your Last Name"
                    id="last_name"
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
                        value = {email}
                        id='email'
                        type='email'
                        endAdornment = {
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label="Envelope"
                                    edge="end"                                        
                                >
                                <EmailIcon></EmailIcon>
                                </IconButton>
                            </InputAdornment>
                        }
                        
                    >
    
                    </FilledInput>
    
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '30%' }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-phone">Phone</InputLabel>
                    <FilledInput
                       value = {phone}
                       onChange={(e) => setPhone(e.target.value)}
                        id='phone'
                        type='text'
                        endAdornment = {
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label="Phone"
                                    edge="end"                                        
                                >
                                <PhoneIcon></PhoneIcon>
                                </IconButton>
                            </InputAdornment>
                        }
                        
                    >
    
                    </FilledInput>
    
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '30%' }} variant="filled">
                    <FilledInput
                       onChange={(e) => setBegin(e.target.value)}
                        value = {begin}
                        id='begin'
                        type='date'
                                            
                    >
    
                    </FilledInput>
                    <FormHelperText id="filled-beign-helper-text">Contract Begin Date</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '30%' }} variant="filled">
                    <FilledInput
                        onChange={(e) => setExpiry(e.target.value)}
                        value = {expiry}
                        id='expiry'
                        type='date'
                                            
                    >
    
                    </FilledInput>
                    <FormHelperText id="filled-expiry-helper-text">Contract Expiry Date</FormHelperText>
                    </FormControl>
                    
                    <FormControl sx={{ m: 1, width: '30%' }} variant="filled">
                        <InputLabel htmlFor="image-upload">Upload Image</InputLabel>
                        <Input
                            accept="image/*"
                            id="image-upload"
                            type="file"
                            onChange={handleImageChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="upload image"
                                        edge="end"
                                        component="label"
                                        htmlFor="image-upload"
                                    >
                                        <PhotoCamera />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText id="image-upload-helper-text">Select an image file</FormHelperText>
                    </FormControl>
                    <TextField
                        onChange={(e) => setCompany(e.target.value)}
                        value = {company}
                        label="Enter Company Name"
                        id="company"
                        sx={{ m: 1, width: '30%' }}
                        variant="filled"
                        />
                    <TextField
                        onChange={(e) => setCountry(e.target.value)}
                        value = {country}
                        label="Enter Country Name" 
                        id="country"
                        sx={{ m: 1, width: '30%' }}
                        variant="filled"
                    />
                    <FormControl sx={{ m: 1, width: '93%' }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-address">Address</InputLabel>
                    <FilledInput
                       onChange={(e) => setAddress(e.target.value)}
                        value = {address}
                        id='address'
                        type='text'
                        endAdornment = {
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label="address"
                                    edge="end"                                        
                                >
                                <LocationOnIcon></LocationOnIcon>
                                </IconButton>
                            </InputAdornment>
                        }
                        
                    >
    
                    </FilledInput>
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

export default EditAgent;