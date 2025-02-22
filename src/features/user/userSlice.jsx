import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogged: (state, action) => {
      state.isLogged = true;
      state.user = action.payload;
    },
    setUserLoggout: (state) => {
      state.isLogged = false;
      state.user = {};
    },
  },
});

export const { setUserLogged, setUserLoggout } = userSlice.actions;
export default userSlice.reducer;
