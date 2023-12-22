import axios from "axios";
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
const Register = () => {
  const { emailPassRegister, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    // console.log(e);
    const name = e.name;
    const email = e.email;
    const password = e.password;
    const photo = e.photo[0];
    const imgbbKey = import.meta.env.VITE_imgbb;
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${imgbbKey}`,
      {
        image: photo,
      },
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    if (res.data.success) {
      const photo = res.data.data.display_url;
      emailPassRegister(email, password)
        .then(() => {
          updateUserProfile(name, photo)
            .then(() => {
              toast.success("Registration Successful");
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
              toast.error(`${err.message}`);
            });
        })
        .catch((err) => {
          if (err) {
            toast.error(`${err.message}`);
            console.log(err);
          }
        });
    }
  };
  return (
    <div className="max-w-md mx-auto mt-20 shadow-md shadow-gray-400 p-6 rounded-md">
      <h2 className="text-center mb-10 text-2xl font-semibold border-b-2 pb-2">
        Pls, Register Your Account
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex  flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your Name" />
          </div>
          <TextInput
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500" role="alert">
              Name is required
            </p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Photo" />
          </div>
          <FileInput type="file" {...register("photo", { required: true })} />
          {errors.photo?.type === "required" && (
            <p className="text-red-500" role="alert">
              Photo is required
            </p>
          )}
        </div>
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
            <p className="text-red-500" role="alert">
              Password is required
            </p>
          )}
        </div>

        <Button type="submit">Register</Button>
      </form>
      <div className="mt-4">
        <p>
          Have an account? Pls,{" "}
          <Link className="text-blue-900 hover:opacity-80" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
