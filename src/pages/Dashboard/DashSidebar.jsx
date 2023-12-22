import { Button, Sidebar } from "flowbite-react";
import { HiChartPie } from "react-icons/hi";
import { MdAddTask } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { CiPower } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import demouser from "../../assets/demouser.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const DashSidebar = () => {
  const navigate = useNavigate();
  const { logOut, user } = useAuth();
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logged Out successfully");
      navigate("/");
    });
  };
  return (
    <div className="h-screen shadow-md shadow-black">
      <Sidebar className="w-full">
        <div className="mb-10">
          <img
            src={user ? user?.photoURL : demouser}
            alt="user image"
            className="h-16 w-16 rounded-full border border-cyan-500"
          />
          <h3 className="mt-2">{user?.displayName}</h3>
        </div>
        <div className="space-y-2">
          <NavLink
            to={"/dashboard/home"}
            className={({ isActive }) =>
              isActive
                ? "bg-cyan-600 text-white py-2 px-1 rounded-md flex gap-4"
                : "bg-inherit text-black py-2 px-1 rounded-md flex gap-4"
            }
          >
            <HiChartPie className="text-2xl" />
            Dashboard
          </NavLink>
          <NavLink
            to={"/dashboard/create-task"}
            className={({ isActive }) =>
              isActive
                ? "bg-cyan-600 text-white py-2 px-1 rounded-md flex gap-4"
                : "bg-inherit text-black py-2 px-1 rounded-md flex gap-4"
            }
          >
            <MdAddTask className="text-2xl" />
            Create new task
          </NavLink>
          <NavLink
            to={"/dashboard/todo-list"}
            className={({ isActive }) =>
              isActive
                ? "bg-cyan-600 text-white py-2 px-1 rounded-md flex gap-4"
                : "bg-inherit text-black py-2 px-1 rounded-md flex gap-4"
            }
          >
            <BsListTask className="text-2xl" />
            To-do list
          </NavLink>
        </div>

        <Sidebar.ItemGroup>
          <Link
            to={"/"}
            className="flex gap-4 mb-3 hover:bg-cyan-600 hover:text-white py-2 px-1 rounded-md"
          >
            <FaHome className="text-2xl " />
            Main Home
          </Link>
          <Button onClick={handleLogOut} color="red">
            <CiPower className="mr-2" />
            Logout
          </Button>
        </Sidebar.ItemGroup>
      </Sidebar>
    </div>
  );
};

export default DashSidebar;
