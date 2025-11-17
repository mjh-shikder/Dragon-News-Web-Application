import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";

const Register = () => {
  
  const { createUser, setUser, updateUser } = useContext(AuthContext); // AuthContext
  
  const [nameError, setNameError] = useState('')

const navigation = useNavigate()

  // Handle Register Onclick
  const handleRegisiter = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError('Name shoud be more that 5 character');
      return;
    }
    else {
      setNameError('')
    }
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // console.log(name, email, photo, password);
// Create New User
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, PhotoURL: photo, }).then(() => {
          
          setUser({ ...user, displayName: name, PhotoURL: photo });
          navigation('/')
          
        })
        .catch((error) => {
        console.log(error);
          setUser(user);
});
        
        
        // console.log(user);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="">
      <div className="flex justify-center ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl font-semibold text-center pt-10">
            Register Now
          </h2>
          <form onSubmit={handleRegisiter} className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
            {nameError && <p className="text-xs text-secondary ">{nameError} </p> }
              {/* email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div></div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
