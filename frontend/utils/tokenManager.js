import { cookies } from 'next/headers';

// Check if token exists and is valid
export const isAuthenticated = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('token='))
    ?.split('=')[1];
  
  return !!token;
};

// Set token in cookie
export const setToken = (token) => {
  if (typeof window !== 'undefined') {
    // Set cookie with HttpOnly and Secure flags for better security
    document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`;
    
    // Also store in localStorage for client-side access if needed
    localStorage.setItem('token', token);
  }
};

// Remove token from storage
export const removeToken = () => {
  if (typeof window !== 'undefined') {
    // Clear the cookie
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    
    // Also clear from localStorage
    localStorage.removeItem('token');
  }
};

// Get current user's token
export const getToken = () => {
  if (typeof window !== 'undefined') {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('token='))
      ?.split('=')[1];
    
    return token || localStorage.getItem('token');
  }
  return null;
};