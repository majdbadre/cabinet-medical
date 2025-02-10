import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/doctorsSlice";
import DoctorsFitler from "./doctorsFitler";
import Doctor from "./doctor";

const DoctorsList = () => {
  const { doctors, loading, error, searchTerm } = useSelector(
    (state) => state.doctors
  );
  const dispatch = useDispatch();

  console.log(parseInt(searchTerm));

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch]);

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.amount === searchTerm ||
      parseInt(doctor.experience.slice(0, 2)) === parseInt(searchTerm)
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex justify-center py-8">
      <DoctorsFitler />
      <div className="w-1/2 ">
        <h1 className="text-xl font-bold mb-4">76 Doctors Available</h1>
        {filteredDoctors.map((doctor) => (
          <Doctor doctor={doctor} key={doctor.id} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
