import { useEffect, useState } from "react";
import ToDoCard from "./ToDoCard";
import axios from "axios";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  //   console.log(tasks);
  useEffect(() => {
    axios.get("http://localhost:5000/tasks").then((res) => {
      setTasks(res.data);
    });
  }, []);
  return (
    <div className="mt-20 p-4">
      <div>
        <h3 className="text-center mb-4 text-cyan-600 text-2xl">To-do</h3>
        <div className="flex flex-col gap-3">
          {tasks?.map((task) => (
            <ToDoCard key={task._id} task={task} />
          ))}
          <ToDoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
