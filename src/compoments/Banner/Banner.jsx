import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-banner-image bg-no-repeat bg-cover bg-center max-w-7xl mx-auto rounded-lg">
      <div className="max-w-screen-sm px-5 py-8 text-white bg-black bg-opacity-25 h-full">
        <h1 className="font-semibold text-4xl leading-normal">
          Streamline Your Workflow with our Task Management System
        </h1>
        <h4 className="mt-3 text-gray-400">
          Effortless Task Organization & Productivity Boost
        </h4>
        <p className="my-4">
          Welcome to our Task Management System – the ultimate solution to
          optimize your workflow. Seamlessly manage tasks, set priorities,
          collaborate with your team, and achieve milestones effortlessly.
        </p>
        <Link to={"/login"}>
          <Button>Let's Explore</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
