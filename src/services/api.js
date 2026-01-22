import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('session_id');
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  sendOTP: (email) => api.post('/api/auth/send-otp', { email }),
  verifyOTP: (email, otp) => api.post('/api/auth/verify-otp', { email, otp }),
  logout: () => api.post('/api/auth/logout'),
  checkSession: () => api.get('/api/auth/check-session'),
};

// Crop APIs
export const cropAPI = {
  recommend: (data) => api.post('/api/crops/recommend', data),
};

// Soil APIs
export const soilAPI = {
  analyze: (data) => api.post('/api/soil/analyze', data),
  recommendFertilizer: (data) => api.post('/api/fertilizer/recommend', data),
};

// Weather APIs
export const weatherAPI = {
  getWeather: (location) => api.get('/api/weather', { params: { location } }),
  getAdvisory: (location) => api.get('/api/weather/advisory', { params: { location } }),
};

// Pest APIs
export const pestAPI = {
  detect: (formData) => api.post('/api/pest/detect', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
};

// Market APIs
export const marketAPI = {
  getPrices: (params) => api.get('/api/market/prices', { params }),
  getCropPrice: (cropName, includeTrends = true) => 
    api.get(`/api/market/price/${cropName}`, { params: { trends: includeTrends } }),
  getTrends: (crop) => api.get('/api/market/trends', { params: { crop } }),
};

export default api;

