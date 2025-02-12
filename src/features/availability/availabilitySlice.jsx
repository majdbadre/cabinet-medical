import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchAvailability } from "../../api/fetchData";

export const fetchData = createAsyncThunk(
  "availability/fetchData",
  async (doctorId) => {
    const response = await fetchAvailability(doctorId);
    return response;
  }
);

const availabilitySlice = createSlice({
  name: "availability",
  initialState: {
    doctor: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.doctor = action.payload; // Set doctors data
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default availabilitySlice.reducer;
