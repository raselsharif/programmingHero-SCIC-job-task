import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Button } from "flowbite-react";

const GoogleLogin = () => {
  const { loginGoogle } = useAuth();
  const backToHome = useNavigate();
  const googleLoginHandler = () => {
    loginGoogle()
      .then(() => {
        // console.log(result);
        toast.success("Logged In Successfully");
        backToHome("/dashboard/home");
      })
      .catch((err) => {
        toast.error("Not Logged In");
      });
  };
  return (
    <div className="mb-2">
      <Button
        onClick={googleLoginHandler}
        className="flex items-center gap-3 w-full"
      >
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="metamask"
          className="h-6 w-6"
        />
        <p className="ml-2">Continue with Google</p>
      </Button>
    </div>
  );
};

export default GoogleLogin;
