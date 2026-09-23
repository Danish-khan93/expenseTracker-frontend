import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_DEV_BASE_URL,
  timeout: 10000,
  withCredentials: true,
});
