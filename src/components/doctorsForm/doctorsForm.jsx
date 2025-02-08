import React, { useEffect, useState } from "react";
import "./doctorsForm.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../../redux/doctorsSlice";
import {
  addReservation,
  fetchResevations,
} from "../../redux/ReservationsSlice";
import { FaStar } from "react-icons/fa";

const DoctorsForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const doctors = useSelector((state) => state.doctors.doctors);
  const reservations = useSelector((state) => state.reservations.reservations);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [raison, setReison] = useState("");

  const filteredDoctors = doctors.filter(
    (doctor) => doctor.id === parseInt(id)
  );

  const reserId = reservations.length + 1;
  const handleSubmit = (e) => {
    const newReservation = {
      id: reserId,
      doctorId: parseInt(id),
      userId: Date.now(),
      userName: name,
      userEmail: email,
      reservationDate: date,
      reservationTime: time,
      status: "en attente",
    };

    dispatch(addReservation(newReservation));
    alert("Appointment booked successfully!");
    navigate("/reservations");
  };

  useEffect(() => {
    if (reservations === 0) {
      dispatch(fetchData());
      dispatch(fetchResevations());
    }
  }, [dispatch]);

  return filteredDoctors.map((doctor) => (
    <div className="appointment-card" key={doctor.id}>
      <div className="card-header">
        <h2>Prendre rendez-vous</h2>
        <button className="close-button">
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="doctor-details">
        <img src={doctor.image} alt="Doctor" className="doctor-image" />
        <div>
          <h3>{doctor.nom}</h3>
          <p className="specialty">{doctor.specialite}</p>
          <p className="rating">
            <FaStar /> {doctor.reviews}
          </p>
        </div>
      </div>
      <div className="qualifications">
        <div className="qualification-item">
          <i className="fas fa-graduation-cap"></i>
            <span>{doctor.education} </span> 
        </div>
        <div className="qualification-item">
          <i className="fas fa-briefcase"></i>
          <span>{doctor.experience}</span>
        </div>
      </div>
      <div className="languages">
        <h4>Langues</h4>
        <div className="language-tags">
          {doctor.languages.map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>
      </div>
      <div className="specializations">
        <h4>Specializations</h4>
        <div className="specialization-tags">
          {doctor.specializations.map((item, idx) => (
            <span key={idx}>{item.nom}</span>
          ))}
        </div>
      </div>
      <div className="appointment-info">
        <div className="info-item">
          <i className="far fa-clock"></i>
          <span>Durée: 30 minutes</span>
        </div>
        <div className="info-item">
          <i className="fas fa-dollar-sign"></i>
          <span>{doctor.tarif_horaire}$</span>
        </div>
      </div>
      <div className="appointment-form">
        <div className="form-group">
          <label>Nom et Prenom</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="reservationDate"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>temps</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>raison de la visite</label>
          <textarea
            name=""
            id=""
            value={raison}
            onChange={(e) => setReison(e.target.value)}
          />
        </div>
        <button onClick={() => handleSubmit()} className="submit-button">
          Prendre rendez-vous
        </button>
      </div>
    </div>
  ));
};

export default DoctorsForm;
