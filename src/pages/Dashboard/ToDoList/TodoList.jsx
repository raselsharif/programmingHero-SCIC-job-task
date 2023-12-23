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
    axios.get(`http://localhost:5000/task/user/${user?.email}`).then((res) => {
      setTasks(res.data);
    });
  }, [user.email]);
  return (
    <div className="mt-20 p-4">
      <div>
        <h3 className="text-center mb-4 text-cyan-600 text-2xl">To-do</h3>
        <div className="flex flex-col gap-3">
          {tasks?.map((task) => (
            <ToDoCard key={task._id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
