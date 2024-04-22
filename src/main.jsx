import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./index.less";
import Home from "./pages/home/home";

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
    element: <div>fuck no</div>,
  },
  {
    path: "account",
    element: <div>if you re logged in , otherwise create account</div>,
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
