import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, Button, Grid } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import { tokens } from "../../../base/theme";
import Header from "../../../components/Header";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import EditItemsAdmin from '../../editItemAdmin';
import GetItemsAdmin from '../../getItemAdmin';
import { useParams } from 'react-router-dom';


const EditTeam = () => {
    const [teamDetails, setTeamDetails] = useState({});
    const [loading, setLoading] = useState(true); // New loading state
    const { user_id } = useParams();
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [role, setRole] = useState("");
    const [userName, setuserName] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
      GetItemsAdmin.getTeamDataAdminEdit(user_id)
        .then((result) => {
          const teamData = result || {};
          setEmail(teamData.email);
          setEmail(teamData.email);
          setuserName(teamData.user_name);
          setDob(teamData.dob);
          setRole(teamData.access);

          setLoading(false); // Set loading to false when data is loaded
        })
        .catch((error) => {
          console.error("Error fetching team data:", error);
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

    const handleEditTeam = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
      
        try {
          const success = await EditItemsAdmin.editTeamSave(email, password,id);
          
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
    
        <Header title="Add Team Member" subtitle="Enter New Member Details" />

        <Box sx={{ display: 'flex', flexWrap: 'wrap' }} component="form" noValidate onSubmit={handleEditTeam}>
              
                <TextField
                    onChange={(e) => setuserName(e.target.value)}
                    value={userName}
                    label="Enter Desired User Name"
                    id="user_name"
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
                    value={email}
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
                
        </Box> 
    </Box>
  );
};

export default EditTeam;