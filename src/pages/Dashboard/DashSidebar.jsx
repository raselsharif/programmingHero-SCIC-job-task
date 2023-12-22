import { Button, Sidebar } from "flowbite-react";
import { HiChartPie } from "react-icons/hi";
import { MdAddTask } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { CiPower } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import demouser from "../../assets/demouser.png";
import { Link, NavLink } from "react-router-dom";
const DashSidebar = () => {
  return (
    <div className="h-screen shadow-md shadow-black">
      <Sidebar className="w-full">
        <div className="mb-10">
          <img
            src={demouser}
            alt="user image"
            className="h-16 w-16 rounded-full border border-cyan-500"
          />
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
          <Button color="red">Logout</Button>
        </Sidebar.ItemGroup>
      </Sidebar>
    </div>
  );
};

export default DashSidebar;
