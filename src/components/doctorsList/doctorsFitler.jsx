import React from "react";
import { setSearchTerm } from "../../redux/doctorsSlice";
import { useDispatch } from "react-redux";

const DoctorsFitler = () => {
  const handleFilter = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  const dispatch = useDispatch();

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
              id="homme"
              name="gender"
            />
            <label htmlFor="homme">homme</label>
            <input
              type="radio"
              className="ml-4 mr-1"
              value="femme"
              id="femme"
              onChange={(e) => handleFilter(e)}
              name="gender"
            />{" "}
            <label htmlFor="femme">Femme</label>
            <input
              type="radio"
              className="ml-4 mr-1"
              value=""
              id="all"
              name="gender"
              onChange={(e) => handleFilter(e)}
            />
            <label htmlFor="all">All</label>
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
            <option value="300">300MAD</option>
            <option value="400">400MAD</option>
            <option value="500">500MAD</option>
            <option value="600">600MAD</option>
            <option value="700">700 MAD et plus</option>
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
            <option value="5">5 ans</option>
            <option value="6">6 ans</option>
            <option value="7">7 ans</option>
            <option value="8">8 ans</option>
            <option value="9">9 ans</option>
            <option value="10">10 ans et plus</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DoctorsFitler;
