import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layout/AuthLayout";
import LoginForm from "../modules/auth/pages/Login";
import SignUpForm from "../modules/auth/pages/Signup";
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
]);
