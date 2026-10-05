import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiHandler } from "../../../api/apihandler";
import type { CategoryFormType } from "../pages/CategoiesFormPage";
import type {
  CategoryResponseType,
  CreateCategoryReqData,
  formDataTypeForUpdate,
  SingleCategoryType,
} from "../categoryType";

import type { ErrorType } from "../../../type/golbalTypes";
// get all cateogries

type Type = "Expense" | "Income";
type ID = string;

const storeUser = localStorage.getItem("user");
const user = storeUser ? JSON.parse(storeUser) : null;
const userId = user?.id;

export const getAllCategories = createAsyncThunk<
  CategoryResponseType<SingleCategoryType[]>,
  Type,
  { rejectValue: ErrorType }
>("cateogry/getAllCategories", async (data: Type, { rejectWithValue }) => {
  try {
    const response = await apiHandler<
      Type,
      CategoryResponseType<SingleCategoryType[]>
    >("get", `category/getAllCategoryByType?type=${data}`);
    console.log(response);
    return response;
  } catch (error) {
    throw rejectWithValue(error as ErrorType);
  }
});

// create cateogroy
export const createCategory = createAsyncThunk<
  CategoryResponseType<SingleCategoryType>,
  CategoryFormType,
  { rejectValue: ErrorType }
>(
  "cateogry/createCategory",
  async (data: CategoryFormType, { rejectWithValue }) => {
    try {
      const response = await apiHandler<
        CreateCategoryReqData,
        CategoryResponseType<SingleCategoryType>
      >("post", "category/create", {
        ...data,
        userId,
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error as ErrorType);
    }
  },
);

// get by id cateogory
export const getByIdCategory = createAsyncThunk<
  CategoryResponseType<SingleCategoryType>,
  ID,
  { rejectValue: ErrorType }
>("cateogry/getByIdCategory", async (id: ID, { rejectWithValue }) => {
  try {
    const response = await apiHandler<
      ID,
      CategoryResponseType<SingleCategoryType>
    >("get", `category/categoryById/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    return rejectWithValue(error as ErrorType);
  }
});
// update by id cateogory
export const updateByIdCategory = createAsyncThunk<
  CategoryResponseType<SingleCategoryType>,
  formDataTypeForUpdate,
  { rejectValue: ErrorType }
>("cateogry/updateByIdCategory", async (data, { rejectWithValue }) => {
  try {
    const { id, ...payload } = data;
    const response = await apiHandler<
      Omit<formDataTypeForUpdate, "id">,
      CategoryResponseType<SingleCategoryType>
    >("patch", `updateCateogryById/${id}`, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error as ErrorType);

    return rejectWithValue(error as ErrorType);
  }
});
