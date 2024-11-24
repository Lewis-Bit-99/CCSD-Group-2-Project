import axios from 'axios';

axios.defaults.withCredentials = true;

const API_BASE_URL = 'http://localhost:8082';

const SaveItemsAdmin = {
  async addTeamSave(email, password, userName) {
    const token = await localStorage.getItem('jwtToken');
    if (!token) throw new Error('JWT Token is missing');

    try {
      const requestData = { email, password, username: userName };

      const response = await axios.post(
        `${API_BASE_URL}/api/users`,
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  async addProductAdmin(postShortDescription, tag, title, postSlug, status, image, place) {
    const token = await localStorage.getItem('jwtToken');
    if (!token) throw new Error('JWT Token is missing');

    try {
      const formData = new FormData();
      formData.append('postShortDescription', postShortDescription);
      formData.append('tag', tag);
      formData.append('place', place);
      formData.append('title', title);
      formData.append('postSlug', postSlug);
      formData.append('status', status);

      if (image) {
        formData.append('image', image);
      }

      const response = await axios.post(
        `${API_BASE_URL}/api/products`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  async addGalleryAdmin(galleryData) {
    const token = await localStorage.getItem('jwtToken');
    if (!token) throw new Error('JWT Token is missing');
    

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/gallery`,
        galleryData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  async addWebsiteImageAdmin(place, categories, tag, title, status, imageUrl) {
    const token = await localStorage.getItem('jwtToken');
    if (!token) throw new Error('JWT Token is missing');

    try {
      const requestData = {
        place: parseInt(place),
        categories,
        tag,
        title,
        status,
        imageUrl,
      };

      const response = await axios.post(
        `${API_BASE_URL}/api/WebsiteImages`,
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  async addWebsiteTextAdmin(postShortDescription, tag, title, postSlug, status) {
    const token = await localStorage.getItem('jwtToken');
    if (!token) throw new Error('JWT Token is missing');

    try {
      const payload = {
        postShortDescription,
        tag,
        title,
        postSlug,
        status,
      };

      const response = await axios.post(
        `${API_BASE_URL}/api/websiteTexts`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      } else {
        console.error('Unexpected response status:', response.status);
        return false;
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
        alert(`Error: ${error.response.data.message || 'Something went wrong on the server.'}`);
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('Network error. Please check your connection.');
      } else {
        console.error('Error setting up the request:', error.message);
        alert('An error occurred while setting up the request.');
      }
      throw error;
    }
  },
};

export default SaveItemsAdmin;
