import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/doctorsSlice";
import "./doctorsList.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const DoctorsList = () => {
  const { doctors, loading, error, searchTerm } = useSelector(
    (state) => state.doctors
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch]);


  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="container">
      <div className="grid">
        {filteredDoctors.map((doctor) => (
          <div className="card" key={doctor.id}>
            <img src={doctor.image} alt={doctor.name} />
            <div className="card-content">
              <div className="card-header">
                <h2>{doctor.name}</h2>
                <div className="rating">
                  <FaStar />
                  {doctor.reviews}
                </div>
              </div>
              <p className="specialty">{doctor.specialty}</p>
              <p className="location">
                <i className="fas fa-map-marker-alt"></i> {doctor.address}
              </p>
              <p className="slots">
                <i className="far fa-clock"></i> 5 slots today
              </p>
              <div className="card-footer">
                <span className="price">{doctor.price}$</span>
                <Link to={`/${doctor.id}`} className="book-button">
                  rendez-vous
                </Link>
                <Link to={`/${doctor.id}/portfolio`} className="book-button">
                  details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DoctorsList;
