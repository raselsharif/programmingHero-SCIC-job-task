import { Outlet } from "react-router-dom";
import DashSidebar from "./DashSidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <DashSidebar />
      </div>
      <div className="col-span-9">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
