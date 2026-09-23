import axios from "axios";
import { axiosInstance } from "./axiosInstence";

type METHOD = "get" | "post" | "put" | "patch" | "delete";

export const apiHandler = async <T, R>(
  method: METHOD,
  url: string,
  data?: T,
): Promise<R> => {
  try {
    const response = await axiosInstance.request({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error?.response?.data);
      throw error?.response?.data;
    }

    throw error;
  }
};
