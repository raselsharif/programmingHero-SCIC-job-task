import { Sidebar } from "flowbite-react";
import { HiChartPie } from "react-icons/hi";
import { MdAddTask } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { CiPower } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import demouser from "../../assets/demouser.png";
import { NavLink } from "react-router-dom";
const DashSidebar = () => {
  return (
    <div className="h-screen shadow-md shadow-black">
      <Sidebar className="w-full">
        <div className="mb-5">
          <img
            src={demouser}
            alt="user image"
            className="h-16 w-16 rounded-full border border-cyan-500"
          />
        </div>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <NavLink to={"/dashboard/home"}>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
            </NavLink>
            <NavLink to={"/dashboard/create-task"}>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Create New Task
              </Sidebar.Item>
            </NavLink>
            <NavLink to={"/dashboard/home"}>
              <Sidebar icon={HiChartPie}>To-Do List</Sidebar>
            </NavLink>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={FaHome}>
              Main Home
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={CiPower}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default DashSidebar;
