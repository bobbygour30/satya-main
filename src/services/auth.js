import { authAPI } from './api';

export const authService = {
  login: async (username, password) => {
    try {
      const response = await authAPI.login({ username, password });
      const { token, user } = response.data.data;
      localStorage.setItem('adminToken', token);
      return { user };
    } catch (error) {
      throw error.response?.data || { message: 'Login failed' };
    }
  },

  logout: () => {
    localStorage.removeItem('adminToken');
  },

  verifyToken: async () => {
    try {
      const response = await authAPI.verify();
      return response.data.data.user;
    } catch (error) {
      throw error.response?.data || { message: 'Invalid token' };
    }
  },
};