import axios from 'axios';
import BASE_URL from '../config';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(async config => {
  if (!config.headers) {
    return config;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  res => res,
  async error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
