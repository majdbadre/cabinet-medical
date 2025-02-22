import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { RiLock2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { loginUserFromDb } from "../../api/fetchData";
import { useDispatch } from "react-redux";
import { setUserLogged } from "../../features/user/userSlice";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !password) {
      alert("All field are required!");
      return;
    } else if (password.length < 8) {
      alert("Password Most be great than 8 letters!");
    }
    handleLogin(user, password);
  };

  const handleLogin = async (user, password) => {
    try {
      const data = await loginUserFromDb(user, password);
      if (typeof data === "string") {
        alert(data);
        return;
      }
      dispatch(setUserLogged(data));
      navigate("/doctors");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center space-x-8">
      <div className="w-80 space-y-4">
        <h1 className="text-2xl font-bold text-center">SE CONNECTER</h1>
        <p className="text-gray-500 text-center">
          connectez-vous avec votre compte
        </p>
        <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
          <div className="relative w-full">
            <FiUser className="absolute top-3 left-2 text-xl text-gray-500" />
            <input
              type="text"
              onChange={(e) => setUser(e.target.value)}
              placeholder="user"
              value={user}
              className="bg-[#F0EDFF] rounded-xl px-10 py-3 outline-none placeholder:text-sm font-sans text-black w-full"
            />
          </div>
          <div className="relative">
            <RiLock2Line className="absolute top-3 left-3 text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="bg-[#F0EDFF] rounded-xl px-10 py-3 outline-none placeholder:text-sm font-sans text-black w-full"
            />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <button
              type="submit"
              className="bg-blue-500 px-8 py-2 text-sm font-bold text-white rounded hover:bg-blue-300"
            >
              Login Now
            </button>
            <p className="text-sm">
              Need an acount?{" "}
              <Link to="/" className="text-black underline hover:text-blue-500">
                sign-up
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

export default Login;
