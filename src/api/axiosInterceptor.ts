import { axiosInstance } from "./axiosInstence";

axiosInstance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});
