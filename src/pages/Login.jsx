import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { emailPassLogin } = useAuth();

  const onSubmit = (e) => {
    const form = e;
    const email = form.email;
    const password = form.password;
    console.log(email, password);
    emailPassLogin(email, password)
      .then((result) => {
        if (result) {
          toast.success("Logged In Successfully");
          console.log(result);
          navigate("/dashboard/home");
        }
      })
      .catch((err) => {
        if (err) {
          toast.error(`${err.message}`);
          console.log(err);
        }
      });
  };
  return (
    <div className="max-w-md mx-auto mt-20 shadow-md shadow-gray-400 p-6 rounded-md">
      <h2 className="text-center mb-10 text-2xl font-semibold border-b-2 pb-2">
        Pls, Login First
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex  flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label value="Your email" />
          </div>
          <TextInput
            type="email"
            placeholder="example@mail.com"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500" role="alert">
              Email is required
            </p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Your password" />
          </div>
          <TextInput
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 mt-3" role="alert">
              Password is required
            </p>
          )}
        </div>

        <Button type="submit">Login</Button>
      </form>
      <div className="mt-4">
        <p>
          New here? Pls,
          <Link className="text-blue-900 hover:opacity-80" to={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
