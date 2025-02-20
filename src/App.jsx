import React from "react";

import DoctorsList from "./components/doctorsList/doctorsList";
import Navbar from "./components/Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import DoctorsForm from "./components/doctorsForm/doctorsForm";
import Reservee from "./components/resevationInfo/reservee";
import Login from "./components/Login/login";
import Signup from "./components/signup/signup";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/:id" element={<DoctorsForm />} />
        <Route path="/" element={<DoctorsList />} />
        <Route path="/reservation/:id" element={<Reservee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
