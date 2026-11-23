import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiHandler } from "../../../api/apihandler";
import type {
  ExpenseListType,
  SingleExpenseType,
} from "../type/expenseResType";
import type { ApiResponse } from "../../../type/golbalTypes";

export const getAllExpenses = createAsyncThunk(
  "expense/getAllExpense",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiHandler<
        undefined,
        ApiResponse<ExpenseListType[]>
      >("get", "/expense/getAllExpense");
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);

      return rejectWithValue("Failed to fetch expenses");
    }
  },
);

//get sigle expense Data

export const getExpensesById = createAsyncThunk<
  ApiResponse<SingleExpenseType>,
  number
>("expense/getExpensesById", async (id, { rejectWithValue }) => {
  console.log(id, typeof id);

  try {
    const response = await apiHandler<number, ApiResponse<SingleExpenseType>>(
      "get",
      `/expense/getExpenseById/${id}`,
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return rejectWithValue("Failed to fetch expenses");
  }
});
