import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
 
  return (
    <div>
       
      <h2 className="font-semibold mb-5 text-lg">Login With</h2>
      <div className="space-y-2.5 ">
        {/* Google */}
        <button className="btn w-9/12  mx-auto bg-white text-black border-[#e5e5e5]">
          <FcGoogle size={25}></FcGoogle>
          Login with Google
        </button>
        {/* GitHub */}
        <button className="btn  w-9/12 mx-auto bg-black text-white border-black">
          <FaGithub size={25}></FaGithub>
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
