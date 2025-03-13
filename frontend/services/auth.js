import api from '../utils/axios';
import { setToken, removeToken } from '../utils/tokenManager';

// Register a new user
export const register = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    if (response.data.token) {
      setToken(response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Registration failed');
  }
};

// Login user
export const login = async (credentials) => {
  try {
    const response = await api.post('/auth', credentials);
    if (response.data.token) {
      setToken(response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Login failed');
  }
};

// Logout user
export const logout = () => {
  removeToken();
};

// Get current user
export const getCurrentUser = async () => {
  try {
    const response = await api.get('/auth');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to get user');
  }
};

// Update user profile
export const updateProfile = async (profileData) => {
  try {
    const response = await api.put('/users/profile', profileData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to update profile');
  }
};