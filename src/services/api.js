import axios from 'axios';

// Use import.meta.env for Vite projects
const API_URL = import.meta.env.VITE_API || 'https://satya-admin-backend.vercel.app/api';

console.log('🔧 API URL:', API_URL);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Important for CORS
  timeout: 30000, // 30 second timeout
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log requests in development
    if (import.meta.env.DEV) {
      console.log(`🚀 ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`, config.data || '');
    }
    
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Log responses in development
    if (import.meta.env.DEV) {
      console.log(`✅ ${response.status} ${response.config.url}`, response.data);
    }
    return response;
  },
  (error) => {
    // Enhanced error logging
    console.error('❌ API Error:', {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message
    });

    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      console.log('🔒 Unauthorized - redirecting to login');
      localStorage.removeItem('adminToken');
      // Only redirect if not already on login page
      if (!window.location.pathname.includes('/admin/login')) {
        window.location.href = '/admin/login';
      }
    }

    // Handle 500 Internal Server Error
    if (error.response?.status === 500) {
      console.error('🔥 Server Error:', error.response.data);
      // You could show a toast notification here
    }

    // Handle network errors
    if (error.code === 'ECONNABORTED') {
      console.error('⏰ Request timeout');
    }

    if (!error.response) {
      console.error('📡 Network Error - Server might be down');
    }

    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => {
    console.log('🔐 Attempting login for:', credentials.username);
    return api.post('/auth/login', credentials);
  },
  verify: () => api.post('/auth/verify'),
};

// Case Studies API
export const caseStudyAPI = {
  getAll: () => api.get('/case-studies'),
  getOne: (idOrSlug) => api.get(`/case-studies/${idOrSlug}`), // This should work with both ID and slug
  create: (data) => api.post('/case-studies', data),
  update: (id, data) => api.put(`/case-studies/${id}`, data),
  delete: (id) => api.delete(`/case-studies/${id}`),
  duplicate: (id) => api.post(`/case-studies/${id}/duplicate`),
  updateStatus: (id, status) => api.patch(`/case-studies/${id}/status`, { status }),
};

// Upload API with progress tracking
export const uploadAPI = {
  uploadHeroImage: (caseStudyId, type, file, name, onProgress) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', name);
    
    return api.post(`/uploads/hero/${caseStudyId}/${type}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (progressEvent) => {
        if (onProgress) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(percentCompleted);
        }
      },
    });
  },
  
  bulkUploadHeroImages: (caseStudyId, type, files, onProgress) => {
    const formData = new FormData();
    files.forEach(file => formData.append('images', file));
    
    return api.post(`/uploads/hero/${caseStudyId}/${type}/bulk`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (progressEvent) => {
        if (onProgress) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(percentCompleted);
        }
      },
    });
  },
  
  uploadTableImage: (caseStudyId, rowId, colId, file, alt) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('alt', alt);
    
    return api.post(`/uploads/table/${caseStudyId}/${rowId}/${colId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  
  deleteImage: (imageId) => api.delete(`/uploads/${imageId}`),
  
  reorderImages: (caseStudyId, type, imageOrders) => 
    api.put(`/uploads/reorder/${caseStudyId}/${type}`, { imageOrders }),
  
  getImages: (caseStudyId, type) => 
    api.get(`/uploads/${caseStudyId}/${type || ''}`),
};

// Health check
export const healthAPI = {
  check: () => api.get('/health'),
};

// Helper to check if API is reachable
export const checkApiHealth = async () => {
  try {
    const response = await api.get('/health');
    return { success: true, data: response.data };
  } catch (error) {
    return { 
      success: false, 
      error: error.message,
      details: error.response?.data 
    };
  }
};

export default api;