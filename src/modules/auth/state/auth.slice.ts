import { createSlice } from "@reduxjs/toolkit";
import type { AuthInitialValue } from "../auth.type";
import { registerUserAction } from "./auth.action";
const initialState: AuthInitialValue = {
  loading: false,
  error: null,
  userDetails: null,
};

const authSlice = createSlice({
  name: "authSLice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUserAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.userDetails = action.payload?.data;
    });
    builder.addCase(registerUserAction.rejected, (state, { payload }) => {
      console.log(payload);

      state.loading = false;
      state.error = payload;
    });
  },
});

export default authSlice.reducer;
