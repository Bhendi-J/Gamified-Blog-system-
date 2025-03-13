// Check if token exists and is valid
export const isAuthenticated = () => {
    if (typeof window === 'undefined') {
      return false;
    }
    
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    
    try {
      // Check if token is expired
      // This is a simple check - a real implementation would decode and check expiration
      return true;
    } catch (err) {
      return false;
    }
  };
  
  // Set token in localStorage
  export const setToken = (token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  };
  
  // Remove token from localStorage
  export const removeToken = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  };
  
  // Get current user's token
  export const getToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  };