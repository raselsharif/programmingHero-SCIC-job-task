import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MainLayout from "../pages/MainLayout";
import Register from "../pages/Register";
import WhoCanUse from "../Sections/WhoCanUse";
import About from "../Sections/About";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import CreateTask from "../pages/Dashboard/CreatTask/CreateTask";
import TodoList from "../pages/Dashboard/ToDoList/TodoList";

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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/home",
        element: <DashboardHome />,
      },

      {
        path: "/dashboard/create-task",
        element: <CreateTask />,
      },
      {
        path: "/dashboard/todo-list",
        element: <TodoList />,
      },
    ],
  },
]);

export default routers;
