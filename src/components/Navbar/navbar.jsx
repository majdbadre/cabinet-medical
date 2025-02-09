import React, { useState } from "react";
import "./navbar.css";
import { setSearchTerm } from "../../redux/doctorsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const handleClick = (e) => {
    setTerm(e.target.value);
    dispatch(setSearchTerm(term));
  };
  return (
    <header className="header-navbar">
      <div className="container">
        <div className="logo-section">
          <img src="/images/logo.png" alt="" className="w-10 h-10"/>
          <h1>Rendez-vous Médical</h1>
        </div>
        <div className="links-section">
          <Link to="/">Home</Link>
          <Link to="/reservations">Reservations</Link>
        </div>
        <div className="search-section">
          <input
            type="text"
            placeholder="Rechercher par nom ou par spécialité..."
            value={term}
            onChange={handleClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
