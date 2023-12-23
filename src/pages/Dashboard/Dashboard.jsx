import { Outlet } from "react-router-dom";
import DashSidebar from "./DashSidebar";
import { MdDensityMedium } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const Dashboard = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="grid grid-cols-12">
      <div
        onClick={() => setShow(!show)}
        className="absolute top-3 left-20 block md:hidden z-20"
      >
        {show ? (
          <MdDensityMedium className="text-2xl cursor-pointer hover:opacity-80" />
        ) : (
          <RxCross2 className="text-2xl cursor-pointer hover:opacity-80" />
        )}
      </div>
      <div
        className={`col-span-3 ${
          show ? "hidden" : "absolute top-0 left-0 w-1/2 z-10 h-screen"
        } md:block`}
      >
        <DashSidebar />
      </div>
      <div className={` col-span-12 md:col-span-9 px-3 md:px0`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
