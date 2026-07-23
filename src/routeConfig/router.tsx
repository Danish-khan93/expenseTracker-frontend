import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layout/AuthLayout";
import LoginForm from "../modules/auth/pages/Login";
import SignUpForm from "../modules/auth/pages/Signup";
import MainLayout from "../layout/MainLayout";
import Expense from "../modules/expense/pages/Expense";
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
        path: "/expense",
      },
    ],
  },
]);
