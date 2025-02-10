import React from "react";
import { setSearchTerm } from "../../redux/doctorsSlice";
import { useDispatch } from "react-redux";

const DoctorsFitler = () => {
  const handleFilter = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  const dispatch = useDispatch()

  return (
    <div className="w-1/5 px-10">
      <h1 className="text-xl mb-4">filter</h1>
      <div className="flex flex-col space-y-4">
        <div>
          <h1>Gender: </h1>
          <div className="flex">
            <input
              type="radio"
              className="mr-1"
              value="homme"
              onChange={(e) => handleFilter(e)}
            />
            homme
            <input
              type="radio"
              className="ml-4 mr-1"
              value="femme"
              onChange={(e) => handleFilter(e)}
            />{" "}
            Femme
            <input
              type="radio"
              className="ml-4 mr-1"
              value=""
              onChange={(e) => handleFilter(e)}
            />
            All
          </div>
        </div>
        <div>
          <h1>frais de visite: </h1>
          <select
            name=""
            id=""
            className="bg-amber-50 p-2 rounded-xl w-full outline-none"
            onChange={(e) => handleFilter(e)}
          >
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
          <select
            name=""
            id=""
            className="bg-amber-50 p-2 rounded-xl w-full outline-none"
            onChange={(e) => handleFilter(e)}
          >
            <option value="">sélectionner l'experience</option>
            <option value="1">1 ans</option>
            <option value="2">2 ans</option>
            <option value="3">3 ans</option>
            <option value="4">4 ans</option>
            <option value="5">5+ ans</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DoctorsFitler;
