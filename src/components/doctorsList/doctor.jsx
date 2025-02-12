import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdWorkHistory } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

const Doctor = ({ doctor, handleVisbility }) => {

  return (
    <div className="bg-white rounded-2xl shadow p-4 mb-4">
      <div className="flex items-center">
        <img
          className="w-30 h-30 rounded-full"
          src={doctor.image}
          alt="Doctor Image"
        />
        <div className="ml-4">
          <h2 className="font-bold text-lg">
            {doctor.first_name} {doctor.last_name}
          </h2>
          <p>BDS, MDS</p>
          <p className="text-green-500">
            {parseInt(doctor.amount)}.MAD Consultation Fee at clinic
          </p>
        </div>
        <div className="ml-auto text-right">
          <h2 className="text-lg text-start font-bold pb-4">specialities:</h2>
          <span className="bg-[#cef9f8] text-[#567578] text-sm font-semibold p-1 rounded">
            {doctor.specialty_name}
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
          <span className="ml-1">+ {doctor.experience.split("en")[0]}</span>
        </div>
        <div className="flex items-center ml-2">
          <span className="text-[#feaf62] bg-[#faeee0] p-2 rounded-full text-center">
            <SiGooglemaps className="text-[#feaf62] " />
          </span>
          <span className="ml-1">{doctor.city}</span>
        </div>
        <div className="ml-auto relative">
          <FiPhone className="absolute top-0.5 left-3" />
          <span className="ml-1 border border-gray-300 rounded py-2 pl-8 pr-3 font-bold font-sans text-sm">
            {doctor.phone}
          </span>
        </div>
        <button
          onClick={() => handleVisbility(doctor.id)}
          className="ml-4 bg-[#feaf62] text-black py-2 px-3 rounded text-sm cursor-pointer font-bold font-sans hover:bg-[#fbc58e]"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Doctor;
