import React from "react";
import { useSelector } from "react-redux";
import { TfiClose } from "react-icons/tfi";
import { CiMedicalClipboard } from "react-icons/ci";

const DoctorsForm = ({ doctorId, handleVisibilty }) => {
  const { doctors } = useSelector((state) => state.doctors);

  const getDectorSelected = doctors.filter(
    (doctor) => doctor.id === parseInt(doctorId)
  );

  return (
    <div className="w-xl py-8 pl-8 top-30 z-10 left-120 bg-white rounded-2xl fixed ">
      <div className="overflow-auto space-y-2 h-120 pr-4">
        <h1 className="w-full text-xl font-bold font-sans mb-4 flex justify-between">
          Choisir un créneau horaire:{" "}
          <TfiClose
            onClick={handleVisibilty}
            className="text-bold text-3xl text-gray-500 hover:bg-blue-100 p-1 rounded-full"
          />
        </h1>

        {getDectorSelected.map((doctor) => (
          <div className="space-y-4">
            <div className="flex space-x-2 bg-blue-100 p-4 rounded-xl">
              <img
                src={doctor.image}
                alt=""
                className="w-20 h-20 rounded-full mr-4"
              />
              <div>
                <h2 className="font-bold font-sans">
                  Dr. {doctor.first_name} {doctor.last_name}
                </h2>
                <h3 className="font-bold flex my-1">
                  <CiMedicalClipboard className="mr-1" />{" "}
                  {doctor.specialty_name}
                </h3>
                <h4>
                  {doctor.city}, {doctor.address}
                </h4>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-gray-200">
              <h2 className="font-bold text-md">
                Sélectionnez l'heure et la date:{" "}
              </h2>
              <div className="flex justify-between my-4">
                <span className="border-b-4 border-[#feaf62]">landi</span>
                <span>mardi</span>
                <span>mercredi</span>
                <span>jedi</span>
                <span>vendredi</span>
                <span>samedi</span>
                <span>demanche</span>
              </div>
              <div>
                <h2>apres-midi</h2>
                <div className="flex flex-wrap">
                  <span className="border border-blue-200 px-2 py-1 rounded-3xl mr-2 my-1">
                    23:00AM
                  </span>
                  <span className="border border-blue-200 px-2 py-1 rounded-3xl mr-2 my-1">
                    23:00AM
                  </span>
                  <span className="border border-blue-200 px-2 py-1 rounded-3xl mr-2 my-1">
                    23:00AM
                  </span>
                  <span className="border border-blue-200 px-2 py-1 rounded-3xl mr-2 my-1">
                    23:00AM
                  </span>
                  <span className="border border-blue-200 px-2 py-1 rounded-3xl mr-2 my-1">
                    23:00AM
                  </span>
                  <span className="border border-blue-200 px-2 py-1 rounded-3xl mr-2 my-1">
                    23:00AM
                  </span>
                  <span className="border border-blue-200 px-2 py-1 rounded-3xl mr-2 my-1">
                    23:00AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="border border-gray-200 p-4 rounded-xl">
          <h1 className="mb-2">Entrez vos informations: </h1>
          <div className="flex space-x-2 flex-wrap space-y-4">
            <div>
              <label htmlFor="">Nom:</label>
              <input
                type="text"
                className="border border-blue-200 outline-none rounded-xl ml-2 text-sm py-1 px-2"
                placeholder="entrez votre nom"
              />
            </div>
            <div>
              <label htmlFor="">prenom:</label>
              <input
                type="text"
                className="border border-blue-200 outline-none rounded-xl ml-2 text-sm py-1 px-2"
                placeholder="entrez votre nom"
              />
            </div>
            <div>
              <label htmlFor="">Email:</label>
              <input
                type="text"
                className="border border-blue-200 outline-none rounded-xl ml-2 text-sm py-1 px-2"
                placeholder="entrez votre nom"
              />
            </div>
            <div>
              <label htmlFor="">Phone:</label>
              <input
                type="text"
                className="border border-blue-200 outline-none rounded-xl ml-2 text-sm py-1 px-2"
                placeholder="entrez votre nom"
              />
            </div>
            <div>
              <label htmlFor="">payment: </label>
              <select
                name=""
                id=""
                className="outline-none border border-blue-200 py-1 px-2 rounded-xl text-sm"
              >
                <option value="">Selectionnez la method de payment</option>
                <option value="carte de crédit">carte de crédit</option>
                <option value="espèces">espèces</option>
                <option value="assurance">assurance</option>
                <option value="autre">autre</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={handleVisibilty} className="border border-gray-200 font-bold px-4 py-1 rounded text-sm">cancel</button>
          <button className=" bg-[#feaf62] font-bold px-4 py-1 rounded text-sm">continue</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsForm;
