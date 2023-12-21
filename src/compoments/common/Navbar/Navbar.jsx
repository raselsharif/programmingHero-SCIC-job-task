import { Avatar, Dropdown, Navbar as Nav } from "flowbite-react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav
      fluid
      rounded
      className="max-w-7xl mx-auto border py-5 shadow-md shadow-stone-300"
    >
      <NavLink to="/">
        <img
          src={logo}
          className="h-10 w-10 rounded-full"
          alt="Flowbite React Logo"
        />
      </NavLink>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Nav.Toggle />
      </div>
      <Nav.Collapse>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "pb-1 border-b-2 border-black" : "pb-1 "
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/who-use"}
          className={({ isActive }) =>
            isActive ? "pb-1 border-b-2 border-black" : "pb-1 "
          }
        >
          Who Can Use
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "pb-1 border-b-2 border-black" : "pb-1 "
          }
        >
          About
        </NavLink>
      </Nav.Collapse>
    </Nav>
  );
};

export default Navbar;
