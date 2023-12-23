import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const DashboardHome = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get(`https://task-manager-six-gilt.vercel.app/task/user/${user?.email}`)
      .then((res) => {
        setTasks(res.data);
      });
  }, [user.email]);
  return (
    <div className="mt-20 max-w-2xl mx-auto">
      <div>
        <h2 className="text-center text-2xl font-semibold text-cyan-600">
          Welcome, {user?.displayName}
        </h2>
        <h3 className="py-5 border px-4 w-fit mx-auto mt-7">
          Total Task: {tasks?.length}
        </h3>
      </div>
    </div>
  );
};

export default DashboardHome;
