import axios from 'axios';

const API_BASE_URL = 'https://pronex.abdulfortech.com/api';

const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

const signIn = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, {}, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export { signUp, signIn };
