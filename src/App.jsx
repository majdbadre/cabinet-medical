import React from "react";

import DoctorsList from "./components/doctorsList/doctorsList";
import Navbar from "./components/Navbar/navbar";
import { Route, Routes } from "react-router-dom";
import DoctorsForm from "./components/doctorsForm/doctorsForm";
import ReservationsList from "./components/reservationsList/reservationsList";
import Portfolio from "./components/Portfolio/portfolio";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/:id" element={<DoctorsForm />} />
        <Route path="/" element={<DoctorsList />} />
        <Route path="/reservations" element={<ReservationsList />} />
        <Route path="/:id/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
};

export default App;
