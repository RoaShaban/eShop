import { createBrowserRouter } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Home from "./Pages/Home/Home.jsx";
import ResetPass from "./Pages/ResetPassword/ResetPass.jsx";
import SendCode from "./Pages/SendCode/SendCode.jsx";
import AuthLayout from "./Layouts/AuthLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/sendcode",
        element: <SendCode />,
      },
      {
        path: "/reset",
        element: <ResetPass />,
      },
    ],
  },
]);

export default router;
