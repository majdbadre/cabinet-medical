import React, { useState } from "react";
import { RiLock2Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { MdErrorOutline } from "react-icons/md";

import { addUserTodb } from "../../api/fetchData";
import img from "/images/login-doc.png";
import { isLoggedIn } from "../../features/login/loginSlice";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate email from user
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid Email!");
      return;
    }
    // valdate the values from user
    if (!userName || !email || !password || !phone || !lastName || !firstName) {
      alert("all fileds are required!");
      return;
    }

    if (password.length < 8) {
      alert("Password Most be great than 8 letters!");
    }

    const user = { userName, firstName, lastName, email, phone, password };
    // insert data to db
    // get feedback from back-end and stock it in variable
    addUserTodb(user, setSuccess);
  };

  if (success) {
    if (!success.includes("already")) {
      dispatch(isLoggedIn());
      navigate("/login");
    }
  }

  return (
    <div className="flex justify-center space-x-8">
      {success && (
        <div className="flex absolute text-sm z-10 bg-white px-8 py-4 rounded items-center shadow-lg shadow-blue-500/50">
          {success.includes("already") ? ( // check message Error
            <MdErrorOutline className="mr-2 text-red-600 text-2xl" />
          ) : (
            <GrStatusGood className="mr-2 text-green-600 text-2xl " />
          )}
          {success}
        </div>
      )}
      <div className="w-80 space-y-4">
        <h1 className="text-2xl font-bold text-center">SE CONNECTER</h1>
        <p className="text-gray-500 text-center">
          connectez-vous avec votre compte
        </p>
        <form
          className="space-y-4"
          method="post"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="relative w-full">
            <FiUser className="absolute top-3 left-2 text-xl text-gray-500" />
            <input
              type="text"
              value={userName}
              placeholder="Username"
              name="user_name"
              onChange={(e) => setUserName(e.target.value)}
              className="bg-[#F0EDFF] rounded-xl px-10 py-3 outline-none placeholder:text-sm font-sans text-black w-full"
            />
          </div>
          <div className="relative w-full">
            <FiUser className="absolute top-3 left-2 text-xl text-gray-500" />
            <input
              type="text"
              value={firstName}
              placeholder="First Name"
              name="first_name"
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#F0EDFF] rounded-xl px-10 py-3 outline-none placeholder:text-sm font-sans text-black w-full"
            />
          </div>
          <div className="relative w-full">
            <FiUser className="absolute top-3 left-2 text-xl text-gray-500" />
            <input
              type="text"
              value={lastName}
              placeholder="Last Name"
              name="last_name"
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#F0EDFF] rounded-xl px-10 py-3 outline-none placeholder:text-sm font-sans text-black w-full"
            />
          </div>
          <div className="relative w-full">
            <FiPhone className="absolute top-3 left-2 text-xl text-gray-500" />
            <input
              type="text"
              value={phone}
              placeholder="Phone"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              className="bg-[#F0EDFF] rounded-xl px-10 py-3 outline-none placeholder:text-sm font-sans text-black w-full"
            />
          </div>
          <div className="relative w-full">
            <MdOutlineEmail className="absolute top-3 left-2 text-xl text-gray-500" />
            <input
              type="text"
              value={email}
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#F0EDFF] rounded-xl px-10 py-3 outline-none placeholder:text-sm font-sans text-black w-full"
            />
          </div>
          <div className="relative">
            <RiLock2Line className="absolute top-3 left-3 text-xl text-gray-500" />
            <input
              type="password"
              value={password}
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#F0EDFF] rounded-xl px-10 py-3 outline-none placeholder:text-sm font-sans text-black w-full"
            />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <button
              type="submit"
              className="bg-blue-500 px-8 py-2 text-sm font-bold text-white rounded hover:bg-blue-300"
            >
              Sign Up
            </button>
            <p className="text-sm">
              already sign-up?{" "}
              <Link
                to="/login"
                className="text-black underline hover:text-blue-500"
              >
                login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="w-100">
        <img src={img} alt="login-img" className="w-full rounded-xl" />
      </div>
    </div>
  );
};

export default Signup;
