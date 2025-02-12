import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/doctor/doctorsSlice";
import { fetchResevations } from "../../features/reservation/reservationsSlice";

const ReservationsList = () => {
  const reservations = useSelector((state) => state.reservations.reservations);
  const doctors = useSelector((state) => state.doctors.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (reservations.length === 0) {
      dispatch(fetchData());
      dispatch(fetchResevations());
    }
  }, [dispatch]);

  const fomratTime = (time) => {
    let [hours, minutes] = time.split(":");
    let date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    console.log(date);
    return date.toLocaleTimeString("fr-MA", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="table-container">
      <h1>Reservation Details</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Doctor name</th>
            <th>User ID</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Reservation Date</th>
            <th>Reservation Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>
                {
                  doctors.filter(
                    (doc) => doc.id === parseInt(reservation.doctorId)
                  )[0].name
                }
              </td>

              <td>{reservation.userId}</td>
              <td>{reservation.userName}</td>
              <td>{reservation.userEmail}</td>
              <td>{reservation.reservationDate}</td>
              <td>{fomratTime(reservation.reservationTime)}</td>
              <td>
                <span className="status confirmed">Confirmed</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsList;
