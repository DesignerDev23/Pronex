import axios from 'axios';

const API_URL = 'https://pronex.abdulfortech.com/api/auth';

const authService = {
  signUp: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  signIn: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/signin`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;