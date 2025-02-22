import { configureStore } from "@reduxjs/toolkit";
import doctorsReducer from "../features/doctor/doctorsSlice";
import reservationsReducer from "../features/reservation/reservationsSlice";
import availabilityReducer from "../features/availability/availabilitySlice";
import loginReducer from "../features/login/loginSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    reservations: reservationsReducer,
    availability: availabilityReducer,
    login: loginReducer,
    user: userReducer,
  },
});
