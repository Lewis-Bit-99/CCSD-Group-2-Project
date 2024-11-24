import React, { useState } from 'react';
import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import { tokens } from "../../../base/theme";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:8080/api/users', {
                userName: userName,
                userPassword: password
            });

            if (response.status === 200) {
                // Store the token and user info
                localStorage.setItem('userName', userName);
                navigate('/dashboard-admin');
            }
        } catch (error) {
            setError('Invalid username or password');
            console.error('Login error:', error);
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            backgroundColor={colors.primary[400]}
        >
            <Box
                p={4}
                backgroundColor={colors.primary[400]}
                borderRadius={2}
                boxShadow={3}
                width="100%"
                maxWidth={400}
            >
                <Typography variant="h2" textAlign="center" mb={4}>
                    Sign In
                </Typography>
                
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Username"
                        variant="filled"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        margin="normal"
                        required
                    />
                    
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="filled"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        required
                    />
                    
                    {error && (
                        <Typography color="error" textAlign="center" mt={2}>
                            {error}
                        </Typography>
                    )}
                    
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: colors.greenAccent[600],
                            '&:hover': {
                                backgroundColor: colors.greenAccent[700],
                            }
                        }}
                    >
                        Sign In
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default SignIn;