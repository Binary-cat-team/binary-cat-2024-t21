import axios, { AxiosError } from 'axios';
import { AvailablePagesEnum } from '../config/availablePages.ts';

function getToken() {
  return localStorage.getItem('token');
}

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL || window.location.origin + '/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Interceptor to add authorization header to each request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error?.response?.status === 403) {
      window.location.href = AvailablePagesEnum.FORBIDDEN;
    }
    if (error?.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.replace(`${window.location.origin}/login`);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
