import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TfiClose } from "react-icons/tfi";
import { CiMedicalClipboard } from "react-icons/ci";
import { fetchData } from "../../features/availability/availabilitySlice";
import { CgDanger } from "react-icons/cg";
import {
  convert_time,
  getNextDayDate,
  is_available,
  times_of_day,
} from "./doctorsFunctions";
import { addReservationToDb } from "../../api/fetchData";
import { useNavigate } from "react-router-dom";

const DoctorsForm = ({ doctorId, handleVisibilty }) => {
  const { doctors } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const av_doctor = useSelector((state) => state.availability.doctor);
  const getDectorSelected = doctors.filter(
    (doctor) => doctor.id === parseInt(doctorId)
  );

  const [reservation, setReservation] = useState({
    user_id: user.id,
    doctor_id: getDectorSelected[0].id,
    specialty_id: getDectorSelected[0].specialty_id,
    reservation_date: "",
    consultation_date: "",
    status: "en attente",
    payment_status: "en attente",
    payment_method: "",
    amount: parseInt(getDectorSelected[0].amount),
    patient_name: "",
    patient_email: "",
    patient_phone: "",
  });

  const [day, setDay] = useState("Monday");

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  const handleReseravtionDate = (time) => {
    const date = `${getNextDayDate(day)} ${time}`;
    setReservation({ ...reservation, reservation_date: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReservationToDb(reservation);
    navigate(`/reservation/${doctorId}`);
  };

  useEffect(() => {
    dispatch(fetchData(doctorId));
  }, []);

  return (
    <div className="w-xl py-8 pl-8 top-20 z-10 left-120 bg-white rounded-2xl fixed ">
      <form
        className="overflow-auto space-y-2 h-120 pr-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="w-full text-xl font-bold font-sans mb-4 flex justify-between">
          Choisir un créneau horaire:{" "}
          <TfiClose
            onClick={handleVisibilty}
            className="text-bold text-3xl text-gray-500 hover:bg-blue-100 p-1 rounded-full"
          />
        </h1>

        {getDectorSelected.map((doctor) => (
          <div className="space-y-4" key={doctor.id}>
            <input
              type="text"
              hidden
              value={doctor.specialty_id}
              name="specialty_id"
              onChange={(e) => handleChangeInput(e)}
            />
            <input
              type="text"
              hidden
              value={doctor.amount}
              name="amount"
              onChange={(e) => handleChangeInput(e)}
            />
            <input
              type="text"
              hidden
              value={doctor.id}
              name="doctor_id"
              onChange={(e) => handleChangeInput(e)}
            />
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
                {av_doctor.map((av) => (
                  <span
                    key={av.id}
                    className={`cursor-pointer ${
                      day === av.day_of_week
                        ? "border-b-4 border-[#feaf62]" // style for select the day by user when click
                        : ""
                    } `}
                    onClick={() => setDay(av.day_of_week)}
                  >
                    {av.day_of_week}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex flex-wrap">
                  {av_doctor.map((av) => {
                    if (av.day_of_week === day) {
                      // filter the day selected by user
                      return times_of_day(av.start_time, av.end_time).length >
                        0 ? (
                        times_of_day(av.start_time, av.end_time).map(
                          (time, idx) => {
                            const available = is_available(
                              time,
                              av.start_time,
                              av.end_time,
                              av.is_available
                            ); // feature for show the availability of the doctor
                            return (
                              <input
                                key={idx}
                                className={`text-center py-2 w-20 rounded-3xl mr-2 my-1 outline-none ${
                                  available
                                    ? "bg-gray-100 text-gray-300"
                                    : "border border-blue-300 cursor-pointer" // style for availbility
                                }`}
                                onClick={() =>
                                  !available ? handleReseravtionDate(time) : ""
                                }
                                value={convert_time(time)}
                                readOnly
                              />
                            );
                          }
                        )
                      ) : (
                        <div className="flex font-bold text-amber-500">
                          <CgDanger className="mr-1 text-xl" /> Le docteur n'est
                          pas disponible {day} Merci...
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="border border-gray-200 p-4 rounded-xl">
          <h1 className="mb-2">Entrez vos informations: </h1>
          <div className="flex space-x-2 flex-wrap space-y-4 text-sm">
            <div>
              <label htmlFor="">Nom:</label>
              <input
                type="text"
                className="border border-blue-200 outline-none rounded-xl ml-2 text-sm py-1 px-2"
                placeholder="entrez votre nom"
                name="patient_name"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <div>
              <label htmlFor="">Email:</label>
              <input
                type="text"
                className="border border-blue-200 outline-none rounded-xl ml-2 text-sm py-1 px-2"
                placeholder="entrez votre nom"
                name="patient_email"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <div>
              <label htmlFor="">Phone:</label>
              <input
                type="text"
                className="border border-blue-200 outline-none rounded-xl ml-2 text-sm py-1 px-2"
                placeholder="entrez votre nom"
                name="patient_phone"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <div className="">
              <label htmlFor="">consultation date: </label>
              <input
                type="datetime-local"
                name="consultation_date"
                className="border border-blue-200 outline-none rounded-xl ml-2 text-sm py-1 px-2"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <div>
              <label htmlFor="">payment: </label>
              <select
                name="payment_method"
                id=""
                className="outline-none border border-blue-200 py-1 px-2 rounded-xl text-sm"
                onChange={(e) => handleChangeInput(e)}
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
          <button
            onClick={handleVisibilty}
            className="border border-gray-200 font-bold px-4 py-1 rounded text-sm"
          >
            cancel
          </button>
          <button
            type="submit"
            className=" bg-[#feaf62] font-bold px-4 py-1 rounded text-sm"
          >
            continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorsForm;
