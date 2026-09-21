import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../api/axiosInstence";
import type { userPayload } from "../auth.type";
import { AxiosError } from "axios";

export const registerUserAction = createAsyncThunk(
  "auth/registerUser",
  async (data: userPayload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/register", data);
      console.log(response);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error, rejectWithValue);
        return rejectWithValue(
          error.response?.data?.message || "Registration failed",
        );
      }
    }
  },
);
