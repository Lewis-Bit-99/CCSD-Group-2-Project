import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, Button, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { tokens } from "../../../base/theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Header from "../../../components/Header";
import axios from 'axios'; // Import axios
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutline from '@mui/icons-material/DeleteOutline'; // Correct import

const TeamAdmin = () => {
    const [teamDetails, setTeamDetails] = useState([]);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const token = localStorage.getItem('jwtToken');
                const response = await axios.get('http://localhost:8082/api/users', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const teamData = response.data || [];
                setTeamDetails(teamData);
            } catch (error) {
                console.error("Error fetching team data:", error);
            }
        };
        fetchTeamData();
    }, []);

    const handleDeleteUser = async (id) => {
        try {
            const token = localStorage.getItem('jwtToken');
            const response = await axios.delete(`http://localhost:8082/api/users/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 204) { // No Content status for successful deletion
                setTeamDetails(teamDetails.filter(user => user.user_id !== id));
            } else {
                alert("Error deleting user");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("An error occurred while deleting.");
        }
    };
    

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "user_id", headerName: "ID", width: 90 },
        { field: "username", headerName: "NAME", flex: 1, cellClassName: "name-column--cell" },
        { field: "email", headerName: "EMAIL", flex: 1 },
        {
            field: "access",
            headerName: "ACCESS",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor={
                            access === "admin"
                                ? colors.greenAccent[600]
                                : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        <Typography variant="body1" color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
        {
            field: "edit",
            headerName: "EDIT",
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <Link to={`/editTeam/${row.user_id}`} style={{ textDecoration: "none" }}>
                        <Box
                            width="40%"
                            m="0 auto"
                            p="5px"
                            justifyContent="center"
                            alignItems="center"
                            backgroundColor={
                                row.access === "admin"
                                    ? colors.greenAccent[600]
                                    : colors.greenAccent[700]
                            }
                            borderRadius="4px"
                        >
                            <EditOutlinedIcon />
                            <Typography variant="body1" color={colors.grey[100]} sx={{ ml: "5px" }}>
                                Edit
                            </Typography>
                        </Box>
                    </Link>
                );
            },
        },
        {
            field: "delete",
            headerName: "DELETE",
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDeleteUser(row.user_id)}
                    >
                        <DeleteOutline />
                    </Button>
                );
            },
        },
    ];

    return (
        <Box>
            <Header title="Team" subtitle="Managing the Team" />
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={teamDetails}
                    columns={columns}
                    pageSize={12}
                    getRowId={(row) => row.user_id} // Ensure each row has a unique key
                />
            </Box>
            <Link to="/AddTeam" style={{ textDecoration: 'none' }}>
                <Grid container justifyContent="flex-end">
                    <Box sx={{ m: 2 }}>
                        <Button 
                            startIcon={<PersonAddAltOutlinedIcon />}
                            justifyContent="center"
                            variant="contained"
                            size="large"
                            color="success"
                        >
                            Add Team Member
                        </Button>
                    </Box>
                </Grid>
            </Link>
        </Box>
    );
};

export default TeamAdmin;
