import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/Routers";
import { Toaster } from "react-hot-toast";
import AuthProviders from "./Providers/AuthProviders";
import AOS from "aos";
import "aos/dist/aos.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
AOS.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <AuthProviders>
        <RouterProvider router={routers}></RouterProvider>
      </AuthProviders>
    </DndProvider>
    <Toaster />
  </React.StrictMode>
);
