import React, { useEffect } from "react";
import { GrStatusGood } from "react-icons/gr";
import { IoMdHelpCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchResevations } from "../../api/fetchData";
import { useParams } from "react-router-dom";

const Reservee = () => {

  return (
    <div className="flex px-20 justify-center space-x-10">
      <div className="bg-white p-10 rounded-xl">
        <div className="flex items-center space-x-4 mb-6 border-b p-4 border-gray-200">
          <GrStatusGood className="text-6xl text-green-400" />
          <div>
            <h1 className="text-xl">
              Votre rendez-vous a été réservé avec succès{" "}
            </h1>
            <p className="text-xl">reservation: #202</p>
          </div>
        </div>
        <div className="flex w-full space-x-20">
          <div className="space-y-4">
            <div>
              <h3>reservation avec: </h3>
              <p>Dr. badr majd</p>
            </div>
            <div>
              <h3>Clinc Name : </h3>
              <p>Matrix dental & Skin lounge</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border-l border-gray-300 pl-4">
              <h3>la date et le tempe: </h3>
              <p>20 Mar 2023 at 10:0pm</p>
            </div>
            <div className="border-l border-gray-300 pl-4">
              <h3>Clinc address : </h3>
              <p>Texas, united State </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 my-6 justify-end">
          <button className="px-2 py-1 text-sm font-bold rounded border border-gray-300">
            voir l'emplacement
          </button>
          <button className="px-2 py-1 text-sm font-bold rounded border border-gray-300">
            Reprogrammer
          </button>
          <button className="bg-amber-300 px-2 py-1 text-sm font-bold rounded">
            télécharger le reçu
          </button>
        </div>
      </div>
      <div className="w-1/3 bg-white p-8">
        <h1 className="text-xl py-4">instructions à suivre</h1>
        <div className="space-y-4">
          <div className=" flex space-x-2 items-center">
            <div>
              <IoMdHelpCircle className="text-2xl" />
            </div>
            <div>
              Arrivez à la clinique dentaire quelques minutes avant l’heure
              prévue de votre rendez-vous.
            </div>
          </div>
          <div className=" flex space-x-2 items-center">
            <div>
              <IoMdHelpCircle className="text-2xl" />
            </div>
            <div>
              Si vous êtes un nouveau patient, remplissez tous les documents
              nécessaires ou mettez à jour vos informations
            </div>
          </div>
          <div className=" flex space-x-2 items-center">
            <div>
              <IoMdHelpCircle className="text-2xl" />
            </div>
            <div>
              Rencontrez le dentiste pour discuter de vos préoccupations, de
              toute douleur ou inconfort et de vos options de traitement
            </div>
          </div>
          <div className=" flex space-x-2 items-center">
            <div>
              <IoMdHelpCircle className="text-2xl" />
            </div>
            <div>
              Sur la base de la consultation, le dentiste élaborera un plan de
              traitement, qui peut inclure des nettoyages, des obturations, des
              extractions ou d’autres procédures.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservee;
