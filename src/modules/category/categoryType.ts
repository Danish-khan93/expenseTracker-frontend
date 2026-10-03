import type { CategoryFormType } from "./pages/CategoiesFormPage";

export type CategoryDropDownType = {
  value: "Expense" | "Income";
  id: number;
};

export type CategoryResponseType<T> = {
  status: string;
  code: number;
  data: T;
  message: string;
};

export type CreateCategoryReqData = CategoryFormType & { userId: number };

export type SingleCategoryType = {
  id: number;
  type: "Expense" | "Income";
  userId: number;
  categoryName: string;
  // iconName: keyof typeof iconMap;
  icon: string;
  color: string;
  createdAt: string;
  updatedAt: string;
};

export type InitialStateCategory = {
  loading: boolean;
  expense: SingleCategoryType[] | [];
  income: SingleCategoryType[] | [];
  error: null | unknown;
};
