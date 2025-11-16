import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";

const Login = () => {
  const { signin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });

    signin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state? location.state : '/'}`) // Redirecting user after login
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <div className="">
      <div className="flex justify-center ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl font-semibold text-center pt-10">
            Login Your Account
          </h2>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <p className="text-center font-light pt-5 ">
                Don't Have an Accout? Then
                <Link
                  className="text-secondary font-semibold hover:text-blue-800 hover:font-semibold"
                  to={"/auth/register"}
                >
                  <span> </span>Register
                </Link>{" "}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
