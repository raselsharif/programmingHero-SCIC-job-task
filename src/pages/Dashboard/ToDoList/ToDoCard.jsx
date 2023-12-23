import axios from "axios";
import toast from "react-hot-toast";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDrag } from "react-dnd";

const ItemTypes = {
  CARD: "card",
};
const ToDoCard = ({ task, onDrag }) => {
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`https://task-manager-six-gilt.vercel.app/task/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          toast.success("Deleted successfully");
          location.reload();
        }
      });
  };
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { type: ItemTypes.CARD, item: task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div
      className="rounded-md bg-cyan-600 bg-opacity-20  p-3 flex justify-between"
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onClick={() => onDrag(task)}
    >
      <div>
        <h3 className="font-semibold">Title: {task?.title}</h3>
        <p>Detail: {task?.des}</p>
        <div>
          <p>Deadline: {task?.deadLine}</p>
          <p>Priority: {task?.priority}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <MdDelete
          onClick={() => handleDelete(task?._id)}
          className="text-red-700 text-2xl hover:opacity-80 cursor-pointer"
        />
        <Link to={`/dashboard/update/${task?._id}`}>
          <MdEdit className="text-green-700 text-2xl hover:opacity-80 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default ToDoCard;
