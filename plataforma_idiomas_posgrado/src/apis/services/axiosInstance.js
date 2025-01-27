//src/apis/services/axiosInstance.js

import axios from 'axios';

// Crear una instancia de Axios
const axiosInstance = axios.create();

// Interceptor para agregar el token a las solicitudes
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token_session');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;