import { Box, Typography, useTheme, Button, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { tokens } from "../../../base/theme";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Header from "../../../components/Header";
import TextField from '@mui/material/TextField';
import React, { useContext, useState, useEffect } from "react";
import GetItemsAdmin from "../../getItemAdmin";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveItemsAdmin from "../../saveItemAdmin";
import DeleteItemsAdmin from "../../deleteItemAdmin";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditItemsAdmin from "../../editItemAdmin";

const BlogsAdmin = () => {
    const [categoryDetails, setCategoryDetails] = useState([]);
    const [blogDetails, setBlogDetails] = useState([]);
    const [blogTitle, setTitleDetails] = useState([]);
    const [blogAuthor, setAuthorDetails] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [categorySlug, setCategorySlug] = useState("");
    const [open, setOpen] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [editedRowId, setEditedRowId] = useState(null);
  
    const handleEdit = (id) => {
        const editedCategory = categoryDetails.find((category) => category.id === id);
      
        if (editedCategory) {
          setEditedRowId(id);
          setCategoryName(editedCategory.category_name || ""); // Ensure category_name is not null
          setCategorySlug(editedCategory.category_slug || ""); // Ensure category_slug is not null
        }
      };
      
    const handleSave = async (id) => {
        try {
          const success = await EditItemsAdmin.editPostCad(id, categoryName, categorySlug);
    
          if (success) {
            window.location.reload();
          } else {
            // Handle login failure and display an error message to the user
            alert("Error Saving data");
          }
        } catch (error) {
          // Handle network or other errors
          console.error("Saving Error:", error);
          alert("An error occurred while saving.");
        }
      };
    

    const handleClickOpen = (id) => {
      setSelectedCategoryId(id);
      setOpen(true);
    };
  
    const handleClose = () => {
        window.location.reload();
    };

    const handleAddCat = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
      
        try {
          const success = await SaveItemsAdmin.addPostCatSave(categoryName, categorySlug);
          
          if (success) {
            window.location.reload();
          } else {
            // Handle login failure and display an error message to the user
            alert("Error Saving data");
          }
        } catch (error) {
          // Handle network or other errors
          console.error("Saving Error:", error);
          alert("An error occurred while saving.");
        }
      };
      const handleRemoveCat = async (id) => {
        // Use the id parameter in your function
        try {
            const success = await DeleteItemsAdmin.deleteCatAdmin(id);
    
            if (success) {
                window.location.reload();
            } else {
                alert("Error Deleting data");
            }
        } catch (error) {
            console.error("Deleting Error:", error);
            alert("An error occurred while deleting.");
        }
    };
    

    useEffect(() => {
        GetItemsAdmin.getCatAdmin()
            .then((result) => {
                // Assuming result.data is the array you want
                const catData = result.data || [];
                setCategoryDetails(catData);
            })
            .catch((error) => {
                console.error("Error fetching category data:", error);
            });
    }, []);

    useEffect(() => {
        GetItemsAdmin.getPostsAdmin()
            .then((result) => {
                // Assuming result.data is the array you want
                const postData = result.data || [];
                setBlogDetails(postData);
            })
            .catch((error) => {
                console.error("Error fetching post data:", error);
            });
    }, []);
    

    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    


    const columnsCategory = [
        { field: "id", headerName: "ID" },
        {
            field: "category_name",
            headerName: "CATEGORY NAME",
            flex: 1,
            cellClassName: "name-column--cell",
            renderCell: ({ row }) => (
              editedRowId === row.id ? (
                <TextField
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  label="Category Name"
                  variant="outlined"
                />
              ) : (
                <span>{row.category_name}</span>
              )
            ),
          },
          {
            field: "category_slug",
            headerName: "CATEGORY SLUG",
            flex: 1,
            renderCell: ({ row }) => (
              editedRowId === row.id ? (
                <TextField
                  value={categorySlug}
                  onChange={(e) => setCategorySlug(e.target.value)}
                  label="Category Slug"
                  variant="outlined"
                />
              ) : (
                <span>{row.category_slug}</span>
              )
            ),
          },
        {
            field: "edit",
            headerName: "EDIT",
            flex: 1,
            renderCell: ({ row }) => (
                editedRowId === row.id ? (
                    <React.Fragment>
                        <Box
                            variant="outlined"
                            onClick={() => handleSave(row.id)}
                            width="40%"
                            m="0 auto"
                            p="5px"
                            justifyContent="center"
                            alignItems="center" // Added for vertical alignment
                            backgroundColor={
                                row.access === "admin"
                                    ? colors.greenAccent[600]
                                    : colors.greenAccent[700]
                            }
                            borderRadius="4px"
                        >
                        <Typography variant="body1" color={colors.grey[100]} sx={{ ml: "5px" }}>
                            Save
                        </Typography>
                        </Box>
                        <Box
                            variant="outlined"
                            onClick={() => setEditedRowId(null)}
                            width="40%"
                            m="0 auto"
                            p="5px"
                            justifyContent="center"
                            alignItems="center" // Added for vertical alignment
                            backgroundColor={
                                row.access === "admin"
                                    ? colors.redAccent[600]
                                    : colors.redAccent[700]
                            }
                            borderRadius="4px"
                        >
                            <Typography variant="body1" color={colors.grey[100]} sx={{ ml: "5px" }}>
                                Cancel
                            </Typography>
                        </Box>
                    </React.Fragment>
                ) : (
                    <Box
                        onClick={() => handleEdit(row.id)}
                        width="40%"
                        m="0 auto"
                        p="5px"
                        justifyContent="center"
                        alignItems="center" // Added for vertical alignment
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
                )
            ),
        },
        {
            field: "delete",
            headerName: "DELETE",
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <Box>
                        <Box
                            width="100%"
                            m="0 auto"
                            p="5px"
                            justifyContent="center"
                            alignItems="center"
                            backgroundColor={
                                row.access === "admin"
                                    ? colors.redAccent[600]
                                    : colors.redAccent[700]
                            }
                            borderRadius="4px"
                            onClick={() => handleClickOpen(row.id)}
                        >
                            <DeleteOutlineOutlinedIcon />
            
                            <Typography variant="body1" color={colors.grey[100]} sx={{ ml: "5px" }}>
                                Delete
                            </Typography>
                            <React.Fragment>
                            {selectedCategoryId !== null && (
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">{"Data Delete Alert"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                        Do you want to delete post category?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button color = "success" onClick={handleClose} autoFocus>No</Button>
                                        <Button color = "error" onClick={() => handleRemoveCat(selectedCategoryId)} autoFocus>
                                        Yes
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            )}
                            </React.Fragment>
                        </Box>
                    </Box>
                );
            },
        },
        
    ];
    const columnsBlogs = [
        { field: "id", headerName: "ID" },
        {
            field: "blog_title",
            headerName: "BLOG TITLE",
            flex: 1,
            cellClassName: "name-column--cell",
            renderCell: ({ row }) => (
              editedRowId === row.id ? (
                <TextField
                  value={blogTitle}
                  onChange={(e) => setTitleDetails(e.target.value)}
                  label="Blog Name"
                  variant="outlined"
                />
              ) : (
                <span>{row.blog_title}</span>
              )
            ),
          },
          {
            field: "blog_author",
            headerName: "BLOG AUTHOR",
            flex: 1,
            renderCell: ({ row }) => (
              editedRowId === row.id ? (
                <TextField
                  value={blogAuthor}
                  onChange={(e) => setAuthorDetails(e.target.value)}
                  label="Blog Author"
                  variant="outlined"
                />
              ) : (
                <span>{row.blog_author}</span>
              )
            ),
          },
        {
            field: "edit",
            headerName: "EDIT",
            flex: 1,
            renderCell: ({ row }) => (
                <Link to={`/editBlog/${row.id}`} style={{ textDecoration: "none" }}>
                    <Box
                        
                        width="40%"
                        m="0 auto"
                        p="5px"
                        justifyContent="center"
                        alignItems="center" // Added for vertical alignment
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
            ),
        },
        {
            field: "delete",
            headerName: "DELETE",
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <Box>
                        <Box
                            width="100%"
                            m="0 auto"
                            p="5px"
                            justifyContent="center"
                            alignItems="center"
                            backgroundColor={
                                row.access === "admin"
                                    ? colors.redAccent[600]
                                    : colors.redAccent[700]
                            }
                            borderRadius="4px"
                            onClick={() => handleClickOpen(row.id)}
                        >
                            <DeleteOutlineOutlinedIcon />
            
                            <Typography variant="body1" color={colors.grey[100]} sx={{ ml: "5px" }}>
                                Delete
                            </Typography>
                            <React.Fragment>
                            {selectedCategoryId !== null && (
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">{"Data Delete Alert"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                        Do you want to delete post category?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button color = "success" onClick={handleClose} autoFocus>No</Button>
                                        <Button color = "error" onClick={() => handleRemoveCat(selectedCategoryId)} autoFocus>
                                        Yes
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            )}
                            </React.Fragment>
                        </Box>
                    </Box>
                );
            },
        },
        
    ];
      

    return (
        <Box>
            <Header title="Blogs" subtitle="Managing Blogs" />
            <Box>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                            >
                    <Box gridColumn="span 6">
                        <DataGrid
                            rows={categoryDetails.map((category) => ({
                            id: category.id,
                            category_name: category.category_name,
                            category_slug: category.category_slug
                            }))}
                            columns={columnsCategory}
                            pageSize={12}
                        />
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }} component="form" noValidate onSubmit={handleAddCat}>
                            <TextField
                                onChange={(e) => setCategoryName(e.target.value)}
                                label="Enter Category Name"
                                id="category_name"
                                sx={{ m: 1, width: '25%' }}
                                variant="filled"
                            />
                            <TextField
                                onChange={(e) => setCategorySlug(e.target.value)}
                                label="Enter Category Slug"
                                id="category_slug"
                                sx={{ m: 1, width: '25%' }}
                                variant="filled"
                            />
                            <Box sx={{ m: 2, }}>
                                <Button 
                                    startIcon={<AddCircleOutlinedIcon />}
                                    type="submit"
                                    justifyContent="center"
                                    variant="contained"
                                    size="large"
                                    color = "success"

                                    >Add Post Category
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box gridColumn="span 6">
                        <DataGrid
                            rows={blogDetails.map((blog) => ({
                            id: blog.id,
                            blog_title: blog.title,
                            blog_author: blog.author
                            }))}
                            columns={columnsBlogs}
                            pageSize={12}
                        />
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }} component="form" noValidate onSubmit={handleAddCat}>

                            <Box sx={{ m: 2, }}>
                                <Link to={`/add-blog`} style={{ textDecoration: "none" }}>
                                    <Button 
                                        startIcon={<AddCircleOutlinedIcon />}
                                        justifyContent="center"
                                        variant="contained"
                                        size="large"
                                        color = "success"

                                        >Add Blog
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default BlogsAdmin;