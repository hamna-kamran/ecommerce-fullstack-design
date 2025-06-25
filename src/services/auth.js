import axios from 'axios';

const API = 'https://ecommerce-backend-h3ra.onrender.com/api/auth';

export const loginUser = (data) =>
  axios.post(`${API}/login`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const registerUser = (data) =>
  axios.post(`${API}/signup`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
