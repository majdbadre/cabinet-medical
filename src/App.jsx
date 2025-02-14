import React from "react";

import DoctorsList from "./components/doctorsList/doctorsList";
import Navbar from "./components/Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import DoctorsForm from "./components/doctorsForm/doctorsForm";
import Reservee from "./components/resevationInfo/reservee";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/:id" element={<DoctorsForm />} />
        <Route path="/" element={<DoctorsList />} />
        <Route path="/resevation" element={<Reservee />} />
      </Routes>
    </>
  );
};

export default App;
