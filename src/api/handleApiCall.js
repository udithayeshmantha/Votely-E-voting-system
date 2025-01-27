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
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.message || 'An error occurred');
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response received from the server');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error('Error in setting up the request: ' + error.message);
    }
  }
};