import axios from "axios";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const ToDoCard = ({ task }) => {
  //   console.log(task);
  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/task/delete/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        toast.success("Deleted successfully");
        location.reload();
      }
    });
  };
  return (
    <div className="border border-cyan-600 p-3 flex justify-between">
      <div>
        <h3 className="font-semibold">Title: {task?.title}</h3>
        <p>Detail: {task?.des}</p>
        <div>
          <p>Deadline: {task?.deadLine}</p>
          <p>Priority: {task?.priority}</p>
        </div>
      </div>
      <div onClick={() => handleDelete(task?._id)}>
        <MdDelete className="text-red-700 text-2xl hover:opacity-80 cursor-pointer" />
      </div>
    </div>
  );
};

export default ToDoCard;
