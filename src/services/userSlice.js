import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {
    username: null,
    token: null,
    role:null
  },
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    userlogin: (state, action) => {
      state.userDetails.username = action.payload.username;
      state.userDetails.token = action.payload.token;
      state.userDetails.role =  action.payload.role 
    },

    logout: (state) => {
      localStorage.removeItem("username");
      localStorage.removeItem("role"); 
      localStorage.removeItem("token"); 
    },
  },
});

export const { userlogin, logout } = userSlice.actions;
export default userSlice.reducer;
