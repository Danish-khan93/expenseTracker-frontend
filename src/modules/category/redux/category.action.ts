import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiHandler } from "../../../api/apihandler";
import type { CategoryFormType } from "../pages/CategoiesFormPage";
import type {
  CategoryResponseType,
  CreateCategoryReqData,
  SingleCategoryType,
} from "../categoryType";
import type { AxiosError } from "axios";
// get all cateogries

type Type = "Expense" | "Income";

const storeUser = localStorage.getItem("user");
const user = storeUser ? JSON.parse(storeUser) : null;
const userId = user?.id;

export const getAllCategories = createAsyncThunk<
  CategoryResponseType<SingleCategoryType[]>,
  Type
>("cateogry/getAllCategories", async (data: Type, { rejectWithValue }) => {
  try {
    const response = await apiHandler<
      Type,
      CategoryResponseType<SingleCategoryType[]>
    >("get", `category/getAllCategoryByType?type=${data}`);
    console.log(response);
    return response;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err);

    throw rejectWithValue(err);
  }
});

// create cateogroy
export const createCategory = createAsyncThunk<
  CategoryResponseType<SingleCategoryType>,
  CategoryFormType
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

      return rejectWithValue(error);
    }
  },
);

// get by id cateogory
export const getByIdCategory = createAsyncThunk(
  "cateogry/getByIdCategory",
  async () => {
    try {
    } catch (error) {}
  },
);
// update by id cateogory
export const updateByIdCategory = createAsyncThunk(
  "cateogry/updateByIdCategory",
  async () => {
    try {
    } catch (error) {}
  },
);
