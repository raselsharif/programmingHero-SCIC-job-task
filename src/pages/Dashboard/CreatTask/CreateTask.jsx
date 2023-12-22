import { Button, Label, TextInput, Textarea } from "flowbite-react";
import toast from "react-hot-toast";

const CreateTask = () => {
  const handleCreate = (e) => {
    e.preventDefault();
    toast.success("clicked successfully");
  };
  return (
    <div className="max-w-sm mx-auto mt-20">
      <form onSubmit={handleCreate}>
        <Label color="black" value="Task Title" />
        <TextInput className="my-3" placeholder="Task Title" />
        <Label color="black" value="Deadline" />
        <TextInput type="date" className="my-3" />
        <Label color="black" value="Description" />
        <Textarea className="mt-3" placeholder="Task Details..." rows={8} />
        <Button type="submit" className="mt-3">
          Create
        </Button>
      </form>
    </div>
  );
};

export default CreateTask;
