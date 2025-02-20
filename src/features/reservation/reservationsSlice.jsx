import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchResevations } from "../../api/fetchData";

export const fetchData = createAsyncThunk(
  "reservations/fetchData",
  async (doctorId) => {
    const response = await fetchResevations(doctorId);
    return response;
  }
);

const reservationsSlice = createSlice({
  name: "reservations",
  initialState: {
    reservations: [],
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
        state.reservations = action.payload; // Set doctors data
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default reservationsSlice.reducer;
