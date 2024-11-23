import axios from 'axios';

axios.defaults.withCredentials = true;

const API_BASE_URL = 'http://localhost:8082';

const SaveItemsAdmin = {
  async addTeamSave(email, password, userName) {
    const token = await localStorage.getItem('jwtToken');
    const username = await localStorage.getItem('userName');

    try {
      const formData = new FormData();
      formData.append('username', userName);
      formData.append('email', email);
      formData.append('password', password);

      const response = await axios.post(
        `${API_BASE_URL}/api/WebsiteImages/`,
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
      console.error('Error:', error.response?.data || error.request || error.message);
      throw error;
    }
  },

  async addProductAdmin(postShortDescription, tag, title, postSlug, status, image, place) {
    const token = await localStorage.getItem('jwtToken');
    const username = await localStorage.getItem('userName');

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
      console.error('Error:', error.response?.data || error.request || error.message);
      throw error;
    }
  },

  async addGalleryAdmin(image, tag, title, status, date, OpenAiImage, place, postShortDescription, postSlug, content) {
    const token = await localStorage.getItem('jwtToken');
    const username = await localStorage.getItem('userName');

    try {
      const formData = new FormData();

      formData.append('image', image);
      formData.append('tag', tag);
      formData.append('title', title);
      formData.append('status', status);
      formData.append('date', date);
      formData.append('place', place);
      formData.append('postShortDescription', postShortDescription);
      formData.append('postSlug', postSlug);
      formData.append('content', content);

      if (OpenAiImage) {
        formData.append('OpenAiImage', OpenAiImage);  // Append OpenAiImage only if provided
      }

      const response = await axios.post(
        `${API_BASE_URL}/api/gallery`,
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
      console.error('Error:', error.response?.data || error.request || error.message);
      throw error;
    }
  },

  async addWebsiteImageAdmin(place, categories, tag, title, status, imageUrl) {
    const token = await localStorage.getItem('jwtToken');
    const username = await localStorage.getItem('userName');

    try {
      const formData = new FormData();
      formData.append('categories', categories);  // Added categories here
      formData.append('tag', tag);
      formData.append('title', title);
      formData.append('status', status);
      formData.append('place', place);
      formData.append('imageUrl', imageUrl);

      if (imageUrl) {
        formData.append('imageUrl', imageUrl); // Assuming 'image' is the key on the server to handle file uploads
      }

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
      console.error('Error:', error.response?.data || error.request || error.message);
      throw error;
    }
  },

  async addWebsiteTextAdmin(postShortDescription, tag, title, postSlug, status) {
    const token = await localStorage.getItem('jwtToken');
    const username = await localStorage.getItem('userName');

    try {
      const formData = new FormData();
      formData.append('postShortDescription', postShortDescription);
      formData.append('tag', tag);
      formData.append('title', title);
      formData.append('postSlug', postSlug);
      formData.append('status', status);

      if (image) {
        formData.append('image', image); // Assuming 'image' is the key on the server to handle file uploads
      }const response = await axios.post(
  '${API_BASE_URL}/api/gallery',
  formData,
  {
    headers: {
      'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file uploads
      Authorization: 'Bearer ${token}',
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
async addWebsiteImageAdmin (place, categories, tag, title, status, imageUrl) {
const token = await localStorage.getItem('jwtToken');
const username = await localStorage.getItem('userName');

try {
  const formData = new FormData();
  formData.append('categories', categories); // Added categories here
  formData.append('tag', tag);
  formData.append('title', title);
  formData.append('status', status);
  formData.append('place', place);
  formData.append('imageUrl', imageUrl);

if (imageUrl) {
  formData.append('imageUrl', imageUrl); // Assuming 'image' is the key on the server to handle file uploads
}

const response = await axios.post(
  '${API_BASE_URL}/api/WebsiteImages',
  formData,
  {
    headers: {
      'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file uploads
      Authorization: 'Bearer ${token}',
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
async addWebsiteTextAdmin( postShortDescription, tag, title, postSlug, status){
const token = await localStorage.getItem('jwtToken');
const username = await localStorage.getItem('userName');

try {
  const formData = new FormData();
  formData.append('postShortDescription', postShortDescription);
  formData.append('tag', tag);
  formData.append('title', title);
  formData.append('postSlug', postSlug);
  formData.append('status', status);


const response = await axios.post(
  '${API_BASE_URL}/api/websiteTexts',
  {
    postShortDescription,
    tag,
    title,
    postSlug,
    status,
  },
  {
    headers: {
      'Content-Type': 'application/json', // Set content type to multipart/form-data for file uploads
      Authorization: 'Bearer ${token}',
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


      const response = await axios.post(
        `${API_BASE_URL}/api/websiteTexts`,
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
      console.error('Error:', error.response?.data || error.request || error.message);
      throw error;
    }
  },
};

export default SaveItemsAdmin;
