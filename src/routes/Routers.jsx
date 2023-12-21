import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MainLayout from "../pages/MainLayout";
import Register from "../pages/Register";
import WhoCanUse from "../pages/Sections/WhoCanUse";
import About from "../pages/Sections/About";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/who-use",
        element: <WhoCanUse />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routers;
