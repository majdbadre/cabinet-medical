import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchResevations = createAsyncThunk(
  "reservations/fetchResevations",
  async () => {
    const response = await axios.get("/data.json"); // Path to your JSON file
    return response.data;
  }
);

// Appointments Slice
const reservationsSlice = createSlice({
  name: "reservations",
  initialState: {
    doctors: [],
    reservations: [],
    loading: false,
    error: null,
  },
  reducers: {
    addReservation: (state, action) => {
      state.reservations.push(action.payload);
    },
    updateReservation: (state, action) => {
      const { id, updatedData } = action.payload;
      const appointment = state.find((appt) => appt.id === id);
      if (appointment) {
        Object.assign(appointment, updatedData);
      }
    },
    deleteReservation: (state, action) => {
      return state.filter((appt) => appt.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResevations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResevations.fulfilled, (state, action) => {
        state.loading = false;
        state.reservations = action.payload.reservations; // Set reservations data
      })
      .addCase(fetchResevations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export Actions
export const { addReservation, updateReservation, deleteReservation } =
  reservationsSlice.actions;

export default reservationsSlice.reducer;
