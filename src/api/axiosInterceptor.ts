import { axiosInstance } from "./axiosInstence";
console.log("INTERCEPTOR FILE LOADED");
axiosInstance.interceptors.request.use((config) => {
  console.log(config, "Request intercepted");

  return config;
});

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest);

    if (error.response?.status === 401) {
      try {
        const res = await axiosInstance.get("/auth/refresh");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    return Promise.reject(error);
  },
);
