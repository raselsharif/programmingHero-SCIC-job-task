import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/Routers";
import { Toaster } from "react-hot-toast";
import AuthProviders from "./Providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={routers}></RouterProvider>
    </AuthProviders>
    <Toaster />
  </React.StrictMode>
);
