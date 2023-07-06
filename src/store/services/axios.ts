/* eslint-disable no-param-reassign */
import axios from 'axios';

export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL as string) || 'https://api.themoviedb.org/3/movie';
const instance = axios.create({ baseURL: API_BASE_URL });

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = import.meta.env.VITE_API_TOKEN as string;
    // eslint-disable-next-line @typescript-eslint/dot-notation
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
