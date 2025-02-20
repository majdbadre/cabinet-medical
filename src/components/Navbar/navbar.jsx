import React, { useState } from "react";
import "./navbar.css";
import { setSearchTerm } from "../../features/doctor/doctorsSlice";
import { useDispatch } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const handleClick = (e) => {
    setTerm(e.target.value);
    dispatch(setSearchTerm(term));
  };
  return (
    <header className="px-20 py-4">
      <div className="flex justify-between">
        <div className="logo-section">
          <img src="/images/logo.png" alt="" className="w-7 h-7" />
          <p>MedicalMa</p>
        </div>
        {pathname === "/" && (
          <div className="flex justify-between w-1/4 text-end relative">
            <CiSearch className="absolute left-2 top-2 text-sm text-black font-bold" />
            <input
              type="text"
              className="outline-none text-sm py-1 px-2 pl-7 border border-gray-300 rounded-4xl placeholder:text-xs text-black font-bold"
              placeholder="nom, city, spécialité..."
              value={term}
              onChange={handleClick}
            />
            <Link
              to="login"
              className="border border-gray-300 rounded py-1 px-3 text-sm font-bold"
            >
              Login
            </Link>
            <Link
              to="sign-up"
              className="bg-blue-700 px-3 py-1 text-sm rounded text-white font-bold"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
