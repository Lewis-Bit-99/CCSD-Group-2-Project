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
import { useNavigate, useParams } from 'react-router-dom';
import EditItemsAdmin from '../../editItemAdmin';
import GetItemsAdmin from '../../getItemAdmin';

const EditTeam = () => {
    const [teamDetails, setTeamDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const { user_id } = useParams();
    const [password, setPassword] = useState("");
    const [userName, setuserName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        GetItemsAdmin.getTeamDataAdminEdit(user_id)
            .then((result) => {
                const teamData = result || {};
                setEmail(teamData.email);
                setuserName(teamData.user_name);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching team data:", error);
            });
    }, [user_id]);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleEditTeam = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`your-backend-api-endpoint/${user_id}`, { email, password, userName });
            if (response.status === 200) {
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
            <Header title="Edit Team Member" subtitle="Edit Member Details" />
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
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Save
                </Button>
            </Box> 
        </Box>
    );
};

export default EditTeam;
