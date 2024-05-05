import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/home";
import Register from "./pages/register/Register";
import Login from  "./pages/login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "usershop",
    element: <div>usershop tab</div>,
  },
  {
    path: "About",
    element: <div>About Frontend</div>,
  },
  {
    path: "Products",
    element: <div>products page with filters</div>,
  },
  {
    path: "daily_offers",
    element: <div>the daily offers </div>,
  },
  {
    path: "support",
    element: <div>SUPPORT</div>,
  },
  {
    path: "account",
    element: <div>if you re logged in , otherwise create account</div>,
  },
  {
    path: "account/register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/login/forgot_password",
    element: <div>Nu avem ce face:)</div>,
  },
  
  {
    path: "404",
    element: <div>404</div>,
  },
  {
    path: "*",
    element: <div>404</div>,
  },

]);


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
