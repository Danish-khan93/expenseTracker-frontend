import { createSlice } from "@reduxjs/toolkit";
import type { ExpenseInitialValues } from "../type/expenseResType";
import { getAllExpenses, getExpensesById } from "./expenseAction";

const initialState: ExpenseInitialValues = {
  expense: [],
  singleExpense: null,
  error: null,
  loading: false,
};

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get all expense

    builder.addCase(getAllExpenses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllExpenses.fulfilled, (state, { payload }) => {
      state.loading = false;

      state.expense = payload?.data;
    });
    builder.addCase(getAllExpenses.rejected, (state) => {
      state.error = null;
    });

    // get Single expense

    builder.addCase(getExpensesById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getExpensesById.fulfilled, (state, { payload }) => {
      state.loading = false;
      console.log(payload.data);

      state.singleExpense = payload?.data;
    });
    builder.addCase(getExpensesById.rejected, (state) => {
      state.error = null;
    });
  },
});

export default expenseSlice.reducer;
