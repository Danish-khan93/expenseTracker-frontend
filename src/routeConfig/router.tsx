import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layout/AuthLayout";
import LoginForm from "../modules/auth/pages/Login";
import SignUpForm from "../modules/auth/pages/Signup";
import MainLayout from "../layout/MainLayout";
import Expense from "../modules/expense/pages/Expense";
import ExpenseFormPage from "../modules/expense/pages/ExpenseFormPage";
import Categories from "../modules/category/pages/Categories";
import CategoiesFormPage from "../modules/category/pages/CategoiesFormPage";
import Income from "../modules/Income/pages/Income";
import Budgets from "../modules/budget/pages/Budgets";
import IncomeFormPage from "../modules/Income/pages/IncomeFormPage";
export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    path: "/",
    children: [
      {
        element: <LoginForm />,
        path: "/",
      },
      {
        element: <SignUpForm />,
        path: "/register",
      },
    ],
  },
  {
    element: <MainLayout />,
    path: "/",
    children: [
      {
        element: <Expense />,
        path: "/dashboard",
      },
      {
        element: <Expense />,
        path: "/expense",
      },
      {
        element: <ExpenseFormPage />,
        path: "/expense/new",
      },
      {
        element: <ExpenseFormPage />,
        path: "/expense/:id",
      },
      {
        element: <Categories />,
        path: "/categories",
      },
      {
        element: <CategoiesFormPage />,
        path: "/categories/form",
      },
      {
        element: <Income />,
        path: "/income",
      },
      {
        element: <IncomeFormPage />,
        path: "/income/new",
      },
      {
        element: <Budgets />,
        path: "/budget",
      },
    ],
  },
]);
