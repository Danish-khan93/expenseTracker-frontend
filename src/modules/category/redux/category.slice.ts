import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories, getByIdCategory } from "./category.action";
import type { InitialStateCategory } from "../categoryType";

const initialState: InitialStateCategory = {
  loading: false,
  expense: [],
  income: [],
  singleCategoryData: null,
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

      state.error = payload ?? null;
    });

    // single data set

    builder.addCase(getByIdCategory.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getByIdCategory.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.singleCategoryData = payload?.data;
    });

    builder.addCase(getByIdCategory.rejected, (state, { payload }) => {
      state.error = payload ?? null;
    });
  },
});

export default categorySlice.reducer;
