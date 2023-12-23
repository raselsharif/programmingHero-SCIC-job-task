import axios from "axios";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateTask = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [task, setTask] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/task/${params.id}`)
      .then((res) => setTask(res.data));
  }, [params.id]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const task = {
      ...data,
    };
    console.log(task);
    axios
      .put(`http://localhost:5000/task/update/${params.id}`, task)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Task Updated Successfully");
          navigate("/dashboard/todo-list");
        }
      })
      .then((err) => {
        if (err) {
          toast.error("Task Not Updated");
        }
      });
  };
  return (
    <div className="max-w-sm mx-auto mt-20">
      <h2 className="text-center mb-4 text-2xl text-cyan-600">Edit Task</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label color="black" value="Task Title" />
        <TextInput
          defaultValue={task?.title}
          className="my-3"
          placeholder="Task Title"
          {...register("title", { required: true })}
        />
        {errors.title?.type === "required" && (
          <p className="text-red-500 mt-2" role="alert">
            Title is required
          </p>
        )}
        <div className="flex gap-4">
          <div className="w-full">
            <Label color="black" value="Deadline" />
            <TextInput
              defaultValue={task?.deadLine}
              type="date"
              className="my-3"
              {...register("deadLine", { required: true })}
            />
            {errors.deadLine?.type === "required" && (
              <p className="text-red-500 mt-2" role="alert">
                Deadline is required
              </p>
            )}
          </div>
          <div className="w-full">
            <Label color="black" value="Priority" />
            <Select
              {...register("priority", { required: true })}
              className="my-3"
              defaultValue={task?.priority}
            >
              <option>High</option>
              <option>Moderator</option>
              <option>Low</option>
            </Select>

            {errors.priority?.type === "required" && (
              <p className="text-red-500 mt-2" role="alert">
                Priority is required
              </p>
            )}
          </div>
        </div>
        <Label color="black" value="Description" />
        <Textarea
          defaultValue={task?.des}
          className="mt-3"
          placeholder="Task Details..."
          rows={8}
          {...register("des", { required: true })}
        />
        {errors.des?.type === "required" && (
          <p className="text-red-500 mt-2" role="alert">
            Details is required
          </p>
        )}
        <Button type="submit" className="mt-3">
          Update
        </Button>
      </form>
    </div>
  );
};

export default UpdateTask;
