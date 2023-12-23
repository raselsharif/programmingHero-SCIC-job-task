import { useEffect, useState } from "react";
import ToDoCard from "./ToDoCard";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { useDrop } from "react-dnd";

const TodoList = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [targetOne, setTargetOne] = useState([]);
  console.log(targetOne);
  const [dragged, setDragged] = useState(null);

  useEffect(() => {
    axios
      .get(`https://task-manager-six-gilt.vercel.app/task/user/${user?.email}`)
      .then((res) => {
        setTasks(res.data);
      });
  }, [user.email]);
  const handleItemClick = (item) => {
    setDragged(item);
  };
  const [, dropOne] = useDrop({ accept: "CARD" });
  // useEffect(() => {
  // }, [targetOne, tasks, dragged]);
  // const [, dropOne] = useDrop({
  //   accept: "CARD",
  //   drop: () => {
  //     setTargetOne([...targetOne, dragged]);
  //     const updateTasks = tasks.filter((task) => task !== dragged);
  //     setTasks(updateTasks);
  //     setDragged(null);
  //   },
  // });

  return (
    <div className="mt-20 p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      <div className="border p-1 border-cyan-600">
        <h3 className="text-center mb-4 text-cyan-600 text-2xl">To-do</h3>
        <div className="flex flex-col gap-3">
          {tasks?.map((task) => (
            <ToDoCard
              key={task._id}
              task={task}
              // onDrag={handleItemClick(task)}
            />
          ))}
        </div>
      </div>
      {/* on going section */}
      <div className="border p-1 border-cyan-600">
        <h3 className="text-center mb-4 text-cyan-600 text-2xl">On Going</h3>
        <div className="flex flex-col gap-3" ref={dropOne}>
          {/* {targetOne?.map((task) => (
            <ToDoCard key={task._id} task={task} />
          ))} */}

          {targetOne.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      </div>
      {/* completed section */}
      <div className="border p-1 border-cyan-600">
        <h3 className="text-center mb-4 text-cyan-600 text-2xl">Completed</h3>
        <div className="flex flex-col gap-3"></div>
      </div>
    </div>
  );
};

export default TodoList;
