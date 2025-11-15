import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import profileIcon from "../assets/user.png";
import { AuthContext } from "../Context/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = (e) => {
    logout()
      .then(() => {
        alert("Loginout Successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex justify-between my-5 items-center">
      <div className="">{user && user.email}</div>
      <div className="nav space-x-3 ">
        <NavLink className={"text-accent font-semibold"} to={"/"}>
          Home
        </NavLink>
        <NavLink className={"text-accent font-semibold"} to={"/about"}>
          About
        </NavLink>
        <NavLink className={"text-accent font-semibold"} to={"/career"}>
          Career
        </NavLink>
      </div>
      <div className="login-btn flex space-x-3 ">
        <img src={profileIcon} alt="" />
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-primary rounded-lg px-7 "
          >
            Logout
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary rounded-lg px-7 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
