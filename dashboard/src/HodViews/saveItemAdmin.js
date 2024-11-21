import axios from 'axios';

axios.defaults.withCredentials = true;

const API_BASE_URL = 'http://localhost:8082';

const SaveItemsAdmin = {
  async addTeamSave(username, id, email, password) {
    const token = await localStorage.getItem('jwtToken');
    const username = await localStorage.getItem('username');

    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('id', id);
      formData.append('email', email);
      formData.append('password', password);
      
      
      if (image) {
        formData.append('image', image); // Assuming 'image' is the key on the server to handle file uploads
      }

      const response = await axios.post(
        `${API_BASE_URL}/api/users`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file uploads
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
      throw error;
    }
  },

  async addProductAdmin( title, date, status, productPlace, tags, descriptions, websiteImage, websiteGallery) {
    const token = await localStorage.getItem('jwtToken');
    const username = await localStorage.getItem('produts');

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('date', date);
      formData.append('status', status);
      formData.append('productPlace', productPlace);
      formData.append('tags', tags);
      formData.append('descriptions', descriptions);
      formData.append('websiteImage', websiteImage);
      formData.append('websiteGallery', websiteGallery);
     
      
     

      if (image) {
        formData.append('image', image); // Assuming 'image' is the key on the server to handle file uploads
      }

      const response = await axios.post(
        `${API_BASE_URL}/api/products`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file uploads
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
      throw error;
    }
  },
  async addGalleryAdmin( galleryId, image, info) {
    const token = await localStorage.getItem('jwtToken');
    const username = await localStorage.getItem('gallery');

    try {
      const formData = new FormData();
      formData.append('galleryId', galleryId);
      formData.append('image', image);
      formData.append('info', info);
     

      if (image) {
        formData.append('image', image); // Assuming 'image' is the key on the server to handle file uploads
      }

      const response = await axios.post(
        `${API_BASE_URL}/api/gallery`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file uploads
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
      throw error;
    }
  },
  async addWebsiteImageAdmin( imageUrl, altText, width, height) {
    const token = await localStorage.getItem('jwtToken');
    const username = await localStorage.getItem('websiteImage');

    try {
      const formData = new FormData();
      formData.append('imageUrl', imageUrl);
      formData.append('altText', altText);
      formData.append('width', width);
      formData.append('height', height);
    

      if (image) {
        formData.append('image', image); // Assuming 'image' is the key on the server to handle file uploads
      }

      const response = await axios.post(
        `${API_BASE_URL}/api/WebSiteImages`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file uploads
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
      throw error;
    }
  },
  async addWebsiteTextAdmin( title, content, metaDescription) {
    const token = await localStorage.getItem('jwtToken');
    const username = await localStorage.getItem('websiteText');

    try {
      const formData = new FormData();
     
      formData.append('title', title);
      formData.append('content', content);
      formData.append('metaDescription', metaDescription);
      
     

      if (image) {
        formData.append('image', image); // Assuming 'image' is the key on the server to handle file uploads
      }

      const response = await axios.post(
        `${API_BASE_URL}("/api/websiteTexts")`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file uploads
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
      throw error;
    }
  },

  
};

export default SaveItemsAdmin;
