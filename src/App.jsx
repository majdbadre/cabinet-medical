import React from "react";
import "./App.css";

import DoctorsList from "./components/doctorsList/doctorsList";
import Navbar from "./components/Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import DoctorsForm from "./components/doctorsForm/doctorsForm";
import Reservee from "./components/resevationInfo/reservee";
import Login from "./components/Login/login";
import Signup from "./components/signup/signup";
import { useSelector } from "react-redux";
import Orders from "./pages/Orders";
import SideBar from "./components/Sidebar";
import sidebar_menu from "./constants/sidebar-menu";

const App = () => {
  const { isLogged, user } = useSelector((state) => state.user);
  console.log(isLogged);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/:id" element={isLogged ? <DoctorsForm /> : <Signup />} />
        <Route path="/" element={<Signup />} />
        <Route
          path={`${isLogged ? "/reservation/:id" : "/"}`}
          element={isLogged ? <Reservee /> : <Signup />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path={`${isLogged ? "/doctors" : "/"}`}
          element={isLogged ? <DoctorsList /> : <Signup />}
        />
      </Routes>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />
        <div className="dashboard-body">
          <Routes>
            <Route path="*" element={<div></div>} />
            <Route exact path="/" element={<div></div>} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/locations" element={<div></div>} />
            <Route exact path="/profile" element={<div></div>} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
