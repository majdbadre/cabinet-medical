import axios from "axios";

export const fetchDoctors = async () => {
  const response = await axios.get(
    "http://localhost/cabinet-medical-api/index.php"
  );
  return response.data;
};

export const fetchAvailability = async (doctorId) => {
  try {
    const response = await axios.get(
      "http://localhost/cabinet-medical-api/get_availability.php",
      {
        params: {
          doctor_id: doctorId,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
};

export const addReservationToDb = (reservation) => {
  axios
    .post("http://localhost/cabinet-medical-api/index.php", reservation, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      alert(response.data.message);
    })
    .catch((err) => {
      console.error(err);
      alert("An error occurred while submitting the reservation.");
    });
};

export const fetchResevations = async (doctorId) => {
  try {
    const response = await axios.get(
      "http://localhost/cabinet-medical-api/reservations.php",
      {
        params: {
          doctor_id: doctorId,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log("Error fetching data", err);
  }
};
