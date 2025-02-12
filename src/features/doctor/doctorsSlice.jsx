import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchDoctors } from "../../api/fetchData";

export const fetchData = createAsyncThunk("doctors/fetchData", async () => {
  const response = await fetchDoctors();
  return response
});

const doctorsSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: [],
    reservations: [], // Add reservations state
    loading: false,
    error: null,
    searchTerm: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload; // Set doctors data
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export Actions
export const { setSearchTerm } = doctorsSlice.actions;

export default doctorsSlice.reducer;
