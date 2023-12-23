import axios from "axios";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const CreateTask = () => {
  const { user } = useAuth();
  console.log(user.email);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const task = {
      ...data,
      createDate: Date(),
      email: user?.email,
    };
    console.log(task);
    axios
      .post("https://task-manager-six-gilt.vercel.app/create-task", task)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Task Created Successfully");
          reset();
        }
      })
      .then((err) => {
        if (err) {
          toast.error("Task Not Created");
        }
      });
  };
  return (
    <div className="max-w-sm mx-auto mt-20">
      <h2 className="text-center mb-4 text-2xl text-cyan-600">
        Create New Task
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label color="black" value="Task Title" />
        <TextInput
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
          Create
        </Button>
      </form>
    </div>
  );
};

export default CreateTask;
