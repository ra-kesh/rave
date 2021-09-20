import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userSignup } from "./authServices";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: userInfoFromStorage,
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout: () => {
      localStorage.removeItem("userInfo");
      return initialState;
    },
  },
  extraReducers: {
    [userLogin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [userLogin.pending]: (state) => {
      state.loading = true;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.loading = false;
      state.error = action.payload.error;
    },
    [userSignup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [userSignup.pending]: (state) => {
      state.loading = true;
    },
    [userSignup.fulfilled]: (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.loading = false;
      state.error = action.payload.error;
    },
    // [userUpdate.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.error;
    // },
    // [userUpdate.pending]: (state) => {
    //   state.loading = true;
    // },
    // [userUpdate.fulfilled]: (state, action) => {
    //   state.userInfo = action.payload.userInfo;
    //   state.loading = false;
    //   state.error = "";
    // },
  },
});

export const { userLogout } = authSlice.actions;

export default authSlice.reducer;
