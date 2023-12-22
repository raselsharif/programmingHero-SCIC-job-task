import { Footer as FlowFooter } from "flowbite-react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#233748] mt-20 text-white py-5 px-4">
      <div className="w-full text-center">
        <div className="flex flex-col items-center gap-8">
          <NavLink to="/">
            <img
              src={logo}
              className="h-16 w-16 rounded-full"
              alt="Flowbite React Logo"
            />
          </NavLink>
          <FlowFooter.LinkGroup>
            <FlowFooter.Link
              className="text-white"
              href="https://www.facebook.com/raselsharif0/"
              target="_blank"
            >
              <FaFacebook className="text-3xl hover:opacity-80" />
            </FlowFooter.Link>
            <FlowFooter.Link
              className="text-white"
              href="https://www.linkedin.com/in/raselsharif/"
              target="_blank"
            >
              <FaLinkedin className="text-3xl hover:opacity-80" />
            </FlowFooter.Link>
          </FlowFooter.LinkGroup>
        </div>
        <FlowFooter.Divider />
        <FlowFooter.Copyright
          className="text-gray-200"
          href="https://www.facebook.com/raselsharif0/"
          by="Rasel Sharif"
          year={2023}
          target="_blank"
        />
      </div>
    </div>
  );
};

export default Footer;
