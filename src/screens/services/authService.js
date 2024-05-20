import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const API_URL = 'https://pronex.abdulfortech.com/api/auth';
const API_USER = 'https://pronex.abdulfortech.com/api/user';

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
  getUserData: async (token) => {
    try {
      const options = {
        method: 'GET',
        url: API_USER,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        }
      };
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      throw error;
    }
  },
  storeToken: async (token) => {
    try {
      await AsyncStorage.setItem('authToken', token);
      console.log('Token stored locally:', token);
    } catch (error) {
      throw error;
    }
  },
  getToken: async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      return token;
    } catch (error) {
      throw error;
    }
  },
  removeToken: async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      console.log('Token removed');
    } catch (error) {
      throw error;
    }
  },
  sendForgetPasswordRequest: async (email) => {
    try {
      const options = {
        method: 'POST',
        url: `${API_URL}/forget-password`,
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        data: { email },
      };
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  resetPassword: async (email, otp, newPassword) => {
    try {
      const options = {
        method: 'POST',
        url: `${API_URL}/reset-password`,
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        data: {
          email,
          token: otp, // Assuming 'otp' is the token received via email
          password: newPassword,
          password_confirmation: newPassword, // Assuming no separate confirmation field
        },
      };
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  storeUserData: async (userData) => {
    try {
      // Store user data in AsyncStorage or any other storage mechanism
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      console.log('User data stored:', userData);
    } catch (error) {
      throw error;
    }
  },
  logout: async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      if (!token) {
        throw new Error('No token found');
      }
  
      const options = {
        method: 'POST',
        url: 'https://pronex.abdulfortech.com/api/auth/signout',
        headers: { 
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {}
      };
  
      const response = await axios.request(options);
      console.log('Logged out successfully:', response.data);
  
      await AsyncStorage.removeItem('authToken');
      console.log('Token removed');
    } catch (error) {
      console.error('Logout error', error);
      throw error;
    }
  },
  
};

export default authService;
