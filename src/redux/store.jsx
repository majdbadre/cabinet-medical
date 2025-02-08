import { configureStore } from "@reduxjs/toolkit";
import doctorsReducer from "./doctorsSlice";
import reservationsReducer from "./ReservationsSlice";

export const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    reservations: reservationsReducer,
  },
});
