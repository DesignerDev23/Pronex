// doctorService.js
import axios from 'axios';

const API_URL = 'https://pronex.abdulfortech.com/api/doctors';

const doctorService = {
  fetchDoctors: async (token) => {
    try {
      const options = {
        method: 'GET',
        url: API_URL,
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
};

export default doctorService;
