import axios from 'axios';

axios.defaults.withCredentials = true;

const API_BASE_URL = 'http://localhost:8082';

const SaveItemsAdmin = {
  async addTeamSave(email, password, userName) {
    const token = await localStorage.getItem('jwtToken');
    try {
      const formData = new FormData();
      formData.append('username', userName);
      formData.append('email', email);
      formData.append('password', password);

      const response = await axios.post(
        `${API_BASE_URL}/api/users`,
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
      console.error('Error Response:', error.response);
      console.error('Error Request:', error.request);
      console.error('Error Message:', error.message);
      throw error;
    }
  },

  async addProductAdmin(postShortDescription, tag, title, postSlug, status, image, place) {
    const token = await localStorage.getItem('jwtToken');
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
      console.error('Error Response:', error.response);
      console.error('Error Request:', error.request);
      console.error('Error Message:', error.message);
      throw error;
    }
  },

  async addGalleryAdmin(galleryData) {
    const token = await localStorage.getItem('jwtToken');
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
      console.error('Error Response:', error.response);
      console.error('Error Request:', error.request);
      console.error('Error Message:', error.message);
      throw error;
    }
  },

  async addWebsiteImageAdmin(place, categories, tag, title, status, imageUrl) {
    const token = await localStorage.getItem('jwtToken');
    try {
      const formData = new FormData();
      formData.append('categories', categories);
      formData.append('tag', tag);
      formData.append('title', title);
      formData.append('status', status);
      formData.append('place', place);
      formData.append('imageUrl', imageUrl);

      const response = await axios.post(
        `${API_BASE_URL}/api/WebsiteImages`,
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
      console.error('Error Response:', error.response);
      console.error('Error Request:', error.request);
      console.error('Error Message:', error.message);
      throw error;
    }
  },

  async addWebsiteTextAdmin(postShortDescription, tag, title, postSlug, status) {
    const token = await localStorage.getItem('jwtToken');
    try {
      const galleryData = {
        postShortDescription,
        tag,
        title,
        postSlug,
        status,
      };

      const response = await axios.post(
        `${API_BASE_URL}/api/websiteTexts`,
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
      console.error('Error Response:', error.response);
      console.error('Error Request:', error.request);
      console.error('Error Message:', error.message);
      throw error;
    }
  }
};

export default SaveItemsAdmin;
