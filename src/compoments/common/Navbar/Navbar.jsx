import { Avatar, Dropdown, Navbar as Nav } from "flowbite-react";
import logo from "../../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const { logOut, user } = useAuth();
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logged Out successfully");
      navigate("/");
    });
  };
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
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={user?.photoURL} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard/home"}>
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          ""
        )}

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
