import axios from 'axios';

export const handleApiCall = async (URL, method, Headers, body) => {
  try {
    const response = await axios.request({
      url: URL,
      method: method,
      headers: Headers,
      data: body
    });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};