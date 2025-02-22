import React from "react";

import DoctorsList from "./components/doctorsList/doctorsList";
import Navbar from "./components/Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import DoctorsForm from "./components/doctorsForm/doctorsForm";
import Reservee from "./components/resevationInfo/reservee";
import Login from "./components/Login/login";
import Signup from "./components/signup/signup";
import { useSelector } from "react-redux";

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
    </>
  );
};

export default App;
