import { useEffect, useState } from "react";
import ToDoCard from "./ToDoCard";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const TodoList = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  //   console.log(tasks);
  useEffect(() => {
    axios
      .get(`https://task-manager-six-gilt.vercel.app/task/user/${user?.email}`)
      .then((res) => {
        setTasks(res.data);
      });
  }, [user.email]);
  return (
    <div className="mt-20 p-4 grid grid-cols-2 gap-3">
      <div className="border p-1 border-cyan-600">
        <h3 className="text-center mb-4 text-cyan-600 text-2xl">To-do</h3>
        <div className="flex flex-col gap-3">
          {tasks?.map((task) => (
            <ToDoCard key={task._id} task={task} />
          ))}
        </div>
      </div>
      <div className="border p-1 border-cyan-600">
        <h3 className="text-center mb-4 text-cyan-600 text-2xl">On Going</h3>
        <div className="flex flex-col gap-3"></div>
      </div>
      <div className="border p-1 border-cyan-600">
        <h3 className="text-center mb-4 text-cyan-600 text-2xl">Completed</h3>
        <div className="flex flex-col gap-3"></div>
      </div>
    </div>
  );
};

export default TodoList;
