import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/doctorsSlice";
import DoctorsFitler from "./doctorsFitler";
import Doctor from "./doctor";
import DoctorsForm from "../doctorsForm/doctorsForm";

const DoctorsList = () => {
  const { doctors, loading, error, searchTerm } = useSelector(
    (state) => state.doctors
  );
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [doctorSelected, setDoctorSelected] = useState("");

  console.log(parseInt(searchTerm));

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  const handleVisbility = (id) => {
    setIsVisible(!isVisible);
    setDoctorSelected(id);
  };

  const filteredDoctors = doctors.filter(
    (doctor) =>
      `${doctor.first_name} ${doctor.last_name}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      doctor.specialty_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (parseFloat(doctor.amount) > parseInt(searchTerm) &&
        parseFloat(doctor.amount) < parseInt(searchTerm) + 100) ||
      (parseInt(searchTerm) === 700 && parseInt(doctor.amount) > 700) ||
      parseInt(doctor.experience.slice(0, 2)) === parseInt(searchTerm) ||
      doctor.gender.toLowerCase() === searchTerm.toLowerCase() ||
      (parseInt(searchTerm) === 700 &&
        parseInt(doctor.amount) >= parseInt(searchTerm))
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="relative">
      {isVisible && (
        <div className={`absolute inset-0 bg-black opacity-25 z-1 ${filteredDoctors.length === 1 ? 'h-dvh' : ""}`}></div>
      )}
      <div className="flex justify-center py-8">
        <DoctorsFitler />
        <div className="w-1/2 ">
          <h1 className="text-xl font-bold mb-4">
            {filteredDoctors.length} Doctors Available
          </h1>
          {filteredDoctors.map((doctor) => (
            <Doctor
              doctor={doctor}
              key={doctor.id}
              handleVisbility={handleVisbility}
            />
          ))}
        </div>
      </div>
      {isVisible && <DoctorsForm doctorId={doctorSelected} handleVisibilty={handleVisbility}/>}
    </div>
  );
};

export default DoctorsList;
