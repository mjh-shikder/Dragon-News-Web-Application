import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="">
      <div className="flex justify-center ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl font-semibold text-center pt-10">
            Login Your Account
          </h2>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
              <p className="text-center font-light pt-5 ">
                Already Have an Accout? Then 
                <Link
                  className="text-secondary font-semibold hover:text-blue-800 hover:font-semibold"
                  to={"/auth/login"}
                >
                 <span> </span>Login
                </Link>{" "}
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;