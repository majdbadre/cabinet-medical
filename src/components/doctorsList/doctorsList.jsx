import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/doctorsSlice";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdWorkHistory } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

const DoctorsList = () => {
  const { doctors, loading, error, searchTerm } = useSelector(
    (state) => state.doctors
  );
  console.log(doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch]);

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex justify-center py-8">
      <div className="w-1/5 px-10">
        <h1 className="text-xl mb-4">filter</h1>
        <div className="flex flex-col space-y-4">
          <div>
            <h1>Gender: </h1>
            <div className="flex">
              <input type="radio" className="mr-1" />
              homme
              <input type="radio" className="ml-4 mr-1" /> Femme
              <input type="radio" className="ml-4 mr-1" />
              All
            </div>
          </div>
          <div>
            <h1>frais de visite: </h1>
            <select name="" id="" className="bg-amber-50 p-2 rounded-xl w-full outline-none">
              <option value="">sélectionner le frais</option>
              <option value="50">50$</option>
              <option value="100">100$</option>
              <option value="150">150$</option>
              <option value="200">200$</option>
              <option value="200">autre</option>
            </select>
          </div>
          <div>
            <h1>Experience: </h1>
            <select name="" id="" className="bg-amber-50 p-2 rounded-xl w-full outline-none">
              <option value="">sélectionner l'experience</option>
              <option value="1">1 Years</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="4">4 Years</option>
              <option value="5">5+ Years</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-1/2 ">
        <h1 className="text-xl font-bold mb-4">76 Doctors Available</h1>
        {filteredDoctors.map((doctor) => (
          <div className="bg-white rounded-2xl shadow p-4 mb-4">
            <div className="flex items-center">
              <img
                class="w-30 h-30 rounded-full"
                src="images/doctor02.avif"
                alt="Doctor Image"
              />
              <div className="ml-4">
                <h2 className="font-bold text-lg">Dr. Peter Doe</h2>
                <p>BDS, MDS</p>
                <p className="text-green-500">$58 Consultation Fee at clinic</p>
              </div>
              <div className="ml-auto text-right">
                <h2 className="text-lg text-start font-bold pb-4">
                  specialities:
                </h2>
                <span className="bg-[#cef9f8] text-[#567578] text-sm font-semibold p-1 rounded">
                  Orthodontist &amp; Dental Orthopedist
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <span className="text-[#feaf62] bg-[#faeee0] p-2 rounded-full text-center">
                  <FaStar className="text-[#feaf62] mb-1" />
                </span>
                <span className="ml-1">4.7/5</span>
              </div>
              <div className="flex items-center ml-3">
                <span className="text-[#feaf62] bg-[#faeee0] p-2 rounded-full text-center">
                  <MdWorkHistory />
                </span>
                <span className="ml-1">13+ Years</span>
              </div>
              <div className="flex items-center ml-2">
                <span className="text-[#feaf62] bg-[#faeee0] p-2 rounded-full text-center">
                  <SiGooglemaps className="text-[#feaf62] " />
                </span>
                <span className="ml-1">Boston</span>
              </div>
              <div className="ml-auto relative">
                <FiPhone className="absolute top-0.5 left-3" />
                <span className="ml-1 border border-gray-300 rounded-2xl py-2 pl-8 pr-3">
                  +1 (656) 738 1100
                </span>
              </div>
              <button className="ml-4 bg-[#feaf62] text-black py-2 px-3 rounded-2xl">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
