import { axiosInstance } from "./axiosInstence";

axiosInstance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

axiosInstance.interceptors?.response.use((response) => {
  console.log(response);
  return response;
});


