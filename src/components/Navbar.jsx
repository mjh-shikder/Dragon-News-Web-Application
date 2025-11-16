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
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between my-5 items-center">
      <div className=""></div>
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
      <div className="login-btn flex flex-col space-x-3 items-center">
        <div className="flex gap-5 ">
          <img className="w-10 rounded-full" src={`${user ? user.photoURL : profileIcon}`} alt="" />
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-primary rounded-lg px-7 "
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/auth/login"}
              className="btn btn-secondary rounded-lg px-7 "
            >
              Login
            </Link>
          )}
              </div>
              <div>
                  <div className="mt-2.5  bg-secondary px-2.5  rounded-xl
                   text-white font-semibold 
                    ">{user && user.email}</div>
              </div>
      </div>
    </div>
  );
};

export default Navbar;
