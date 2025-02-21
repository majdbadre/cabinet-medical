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
  const { loggedIn } = useSelector((state) => state.login);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/:id" element={loggedIn ? <DoctorsForm /> : <Signup />} />
        <Route path="/" element={<Signup />} />
        <Route
          path={`${loggedIn ? "/reservation/:id" : "/"}`}
          element={loggedIn ? <Reservee /> : <Signup />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path={`${loggedIn ? "/doctors" : "/"}`}
          element={loggedIn ? <DoctorsList /> : <Signup />}
        />
      </Routes>
    </>
  );
};

export default App;
