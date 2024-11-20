import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, Button, Grid } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import { tokens } from "../../../base/theme";
import Header from "../../../components/Header";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';
import EditItemsAdmin from '../../editItemAdmin';
import GetItemsAdmin from '../../getItemAdmin';
import { useParams } from 'react-router-dom';

const TikTokIcon = ({ color = "#ffffff" }) => {
    return (
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="100%"
        height="100%"
      >
        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
      </svg>
    );
  };

const SocialMedia = () => {

    const [loading, setLoading] = useState(true); // New loading state
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [social, setSocial] = useState("");


    useEffect(() => {
        GetItemsAdmin.getSocialAdmin()
          .then((result) => {
            const socialData = result || {};
            setSocial(socialData);
            setLoading(false); // Set loading to false when data is loaded
          })
          .catch((error) => {
            console.error("Error fetching team data:", error);
          });
      }, []); // <-- Empty dependency array for fetching data once on mount
      

    const [facebookLink, setFacebookLink] = useState("");
    const [instagramLink, setInstagramLink] = useState("");
    const [tiktokLink, setTiktokLink] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");
    const [linkedinLink, setLinkedinLink] = useState("");
    const [pinterestLink, setPinterestLink] = useState("");
    const [twitterLink, setTwitterLink] = useState("");
    

        // Update the useEffect block to set the link
    useEffect(() => {
    if (social) {
        setFacebookLink(social.facebook_data.link);
        setInstagramLink(social.instagram_data.link);
        setTiktokLink(social.tiktok_data.link);
        setYoutubeLink(social.youtube_data.link);
        setLinkedinLink(social.linkedin_data.link);
        setPinterestLink(social.pinterest_data.link);
        setTwitterLink(social.twitter_data.link);
    }
    }, [social]);
    

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    
    const navigate = useNavigate();




    const handleEditSocial = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        
        try {
            const socialData = [
                { name: "facebook", link: facebookLink },
                { name: "instagram", link: instagramLink },
                { name: "youtube", link: youtubeLink },
                { name: "tiktok", link: tiktokLink},
                { name: "pinterest", link: pinterestLink },
                { name: "twitter", link: twitterLink },
                { name: "linkedin", link: linkedinLink },
            ];
    
            const success = await EditItemsAdmin.editSocialSave(socialData);
            
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
    
        <Header title="Change Social Media" subtitle="Social Media Links" />

        <Box sx={{ display: 'flex', flexWrap: 'wrap' }} component="form" noValidate onSubmit={handleEditSocial}>
            <FormControl sx={{ m: 1, width: '30%' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-name">FaceBook Link</InputLabel>
                <FilledInput
                    onChange={(e) => { setFacebookLink(e.target.value); setName("facebook"); }}
                    value={facebookLink}
                    id='link'
                    type='text'
                    endAdornment = {
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label="Envelope"
                                edge="end"                                        
                            >
                            <FacebookOutlinedIcon></FacebookOutlinedIcon>
                            </IconButton>
                        </InputAdornment>
                    }
                    
                >

                </FilledInput>

            </FormControl>
            <FormControl sx={{ m: 1, width: '30%' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-name">Instagram Link</InputLabel>
                <FilledInput
                    onChange={(e) => [setInstagramLink(e.target.value), setName("instagram")]}
                    value={instagramLink}
                    id='link'
                    type='text'
                    endAdornment = {
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label="Envelope"
                                edge="end"                                        
                            >
                            <InstagramIcon></InstagramIcon>
                            </IconButton>
                        </InputAdornment>
                    }
                    
                >

                </FilledInput>

            </FormControl>
            <FormControl sx={{ m: 1, width: '30%' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-name">TikTok Link</InputLabel>
                <FilledInput
                    onChange={(e) => [setTiktokLink(e.target.value), setName("tiktok")]}
                    value={tiktokLink}
                    id='link'
                    type='text'
                    endAdornment = {
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label="Envelope"
                                edge="end"                                        
                            >
                            <div style={{ width: "20px" }}>
                                <TikTokIcon></TikTokIcon>
                            </div>
                            </IconButton>
                        </InputAdornment>
                    }
                    
                >

                </FilledInput>

            </FormControl>
            <FormControl sx={{ m: 1, width: '30%' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-name">Youtube Link</InputLabel>
                <FilledInput
                    onChange={(e) => [setYoutubeLink(e.target.value), setName("youtube")]}
                    value={youtubeLink}
                    id='link'
                    type='text'
                    endAdornment = {
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label="Envelope"
                                edge="end"                                        
                            >
                            <YouTubeIcon></YouTubeIcon>
                            </IconButton>
                        </InputAdornment>
                    }
                    
                >

                </FilledInput>

            </FormControl>
            <FormControl sx={{ m: 1, width: '30%' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-name">Pinterest Link</InputLabel>
                <FilledInput
                    onChange={(e) => [setPinterestLink(e.target.value), setName("pinterest")]}
                    value={pinterestLink}
                    id='link'
                    type='text'
                    endAdornment = {
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label="Envelope"
                                edge="end"                                        
                            >
                            <PinterestIcon></PinterestIcon>
                            </IconButton>
                        </InputAdornment>
                    }
                    
                >

                </FilledInput>

            </FormControl>
            <FormControl sx={{ m: 1, width: '30%' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-name">LinkedIn Link</InputLabel>
                <FilledInput
                    onChange={(e) => [setLinkedinLink(e.target.value), setName("linkedin")]}
                    value={linkedinLink}
                    id='link'
                    type='text'
                    endAdornment = {
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label="Envelope"
                                edge="end"                                        
                            >
                            <LinkedInIcon></LinkedInIcon>
                            </IconButton>
                        </InputAdornment>
                    }
                    
                >

                </FilledInput>

            </FormControl>
            <FormControl sx={{ m: 1, width: '30%' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-name">Twitter Link</InputLabel>
                <FilledInput
                    onChange={(e) => [setTwitterLink(e.target.value), setName("twitter")]}
                    value={twitterLink}
                    id='email'
                    type='text'
                    endAdornment = {
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label="Envelope"
                                edge="end"                                        
                            >
                            <TwitterIcon></TwitterIcon>
                            </IconButton>
                        </InputAdornment>
                    }
                    
                >

                </FilledInput>

            </FormControl>
                <FormControl sx={{ m: 1, width: '93%' }} variant="filled">
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

export default SocialMedia;