import axios from "axios";

const USER_URL = "http://localhost/cabinet-medical-api/user.php";
const DOCTORS_URL = "http://localhost/cabinet-medical-api/index.php";
const AVAILABILITY_URL =
  "http://localhost/cabinet-medical-api/get_availability.php";

const ADD_AVAILABILITY_URL = "http://localhost/cabinet-medical-api/index.php";

const RESERVATIONS_URL =
  "http://localhost/cabinet-medical-api/reservations.php";

export const fetchDoctors = async () => {
  const response = await axios.get(DOCTORS_URL);
  return response.data;
};

export const fetchAvailability = async (doctorId) => {
  try {
    const response = await axios.get(AVAILABILITY_URL, {
      params: {
        doctor_id: doctorId,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
};

export const addReservationToDb = (reservation) => {
  axios
    .post(ADD_AVAILABILITY_URL, reservation, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((err) => {
      console.error(err);
      alert("An error occurred while submitting the reservation.");
    });
};

export const fetchResevations = async (doctorId) => {
  try {
    const response = await axios.get(RESERVATIONS_URL, {
      params: {
        doctor_id: doctorId,
      },
    });
    return response.data;
  } catch (err) {
    console.log("Error fetching data", err);
  }
};

export const addUserTodb = async (user, setSuccess) => {
  try {
    axios.post(USER_URL, user).then((response) => setSuccess(response.data));

    setTimeout(() => {
      setSuccess("");
    }, 2000);
  } catch (err) {
    console.log(err);
  }
};

export const loginUserFromDb = async (user, password) => {
  try {
    const response = await axios.get(USER_URL, { params: { user, password } });
    return response.data; // Return the data directly
  } catch (err) {
    throw err; // Throw error to be handled in the calling function
  }
};

export const getUserFromDb = async (username) => {
  try {
    axios
      .get(USER_URL, {
        params: {
          username,
        },
      })
      .then((response) => console.log(response.data));
  } catch (err) {
    console.log(err);
  }
};
