import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserFromDb } from "../../api/fetchData";

const getUser = createAsyncThunk("users/getUser", async (username) => {
  const response = await getUserFromDb(username);
  return response.data;
});

const initialState = {
  loggedIn: false,
  username: "",
  user: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
    isLoggedOut: (state) => {
      state.loggedIn = false;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loggedIn = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loggedIn = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.loggedIn = false;
      });
  },
});

export const { isLoggedIn, isLoggedOut, setUserName } = loginSlice.actions;

export default loginSlice.reducer;
