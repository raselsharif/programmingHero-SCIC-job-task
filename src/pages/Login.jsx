import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-20 shadow-md shadow-gray-400 p-6 rounded-md">
      <h2 className="text-center mb-10 text-2xl font-semibold border-b-2 pb-2">
        Pls, Login First
      </h2>
      <form className="flex  flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput type="email" placeholder="example@mail.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput type="password" placeholder="Password" required />
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
