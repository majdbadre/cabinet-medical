import React, { useState } from "react";
import "./navbar.css";
import { setSearchTerm } from "../../redux/doctorsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const handleClick = (e) => {
    setTerm(e.target.value);
    dispatch(setSearchTerm(term));
  };
  return (
    <header className="px-8 py-4">
      <div className="flex justify-between">
        <div className="logo-section">
          <img src="/images/logo.png" alt="" className="w-7 h-7" />
          <p>MedicalMa</p>
        </div>
        <div className="flex justify-between w-1/4 text-end relative">
          <CiSearch className="absolute left-2 top-2 text-sm text-black font-bold"/>
          <input
            type="text"
            className="outline-none text-sm py-1 px-2 pl-7 border border-gray-300 rounded-4xl placeholder:text-xs text-black font-bold"
            placeholder="nom, city, spécialité..."
            value={term}
            onChange={handleClick}
          />
          <button>Login</button>
          <button className="bg-blue-700 px-3 py-1 text-sm rounded text-white">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
