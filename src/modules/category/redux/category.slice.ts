import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "./category.action";
import type { InitialStateCategory } from "../categoryType";

const initialState: InitialStateCategory = {
  loading: false,
  expense: [],
  income: [],
  error: null,
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCategories.fulfilled, (state, { payload }) => {
      state.loading = false;
      console.log(payload);

      state.expense = payload?.data;
    });
    builder.addCase(getAllCategories.rejected, (state, { payload }) => {
      state.loading = false;
      console.log(payload);

      state.error = payload?.error;
    });
  },
});

export default categorySlice.reducer;
