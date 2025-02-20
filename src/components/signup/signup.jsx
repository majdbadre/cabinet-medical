import React from "react";
import { RiLock2Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex justify-center space-x-8">
      <div className="w-80 space-y-4">
        <h1 className="text-2xl font-bold text-center">SE CONNECTER</h1>
        <p className="text-gray-500 text-center">
          connectez-vous avec votre compte
        </p>
        <form className="space-y-4">
          <div className="relative w-full">
            <FiUser className="absolute top-3 left-2 text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              className="bg-[#F0EDFF] rounded-xl px-10 py-3 outline-none placeholder:text-sm font-sans text-black w-full"
            />
          </div>
          <div className="relative">
            <RiLock2Line className="absolute top-3 left-3 text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Password"
              className="bg-[#F0EDFF] rounded-xl px-10 py-3 outline-none placeholder:text-sm font-sans text-black w-full"
            />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <button className="bg-blue-500 px-8 py-2 text-sm font-bold text-white rounded hover:bg-blue-300">
              Login Now
            </button>
            <p className="text-sm">
              already sign-up?{" "}
              <Link
                to="login"
                className="text-black underline hover:text-blue-500"
              >
                login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="w-100">
        <img
          src="images/login-doc.png"
          alt="login-img"
          className="w-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default Signup;
