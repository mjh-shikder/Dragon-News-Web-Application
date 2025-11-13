import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-5 text-lg  ">Find Us on</h2>
      <div>
        <div className="join join-vertical w-full ">
          <button className="btn bg-base-100 justify-start join-item"><FaFacebook size={23}></FaFacebook> Facebook</button>
          <button className="btn bg-base-100 justify-start join-item"><FaLinkedin size={23}></FaLinkedin> Linkedin</button>
          <button className="btn bg-base-100 justify-start join-item"><FaInstagram size={23}></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
