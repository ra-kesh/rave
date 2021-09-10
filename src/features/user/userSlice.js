import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers, fetchSingleUser } from "./userService";

const initialState = {
  users: [],
  user: {},
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllUsers.fulfilled]: (state, action) => {
      state.users = action.payload.users;
      state.laoding = false;
    },
    [fetchAllUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [fetchSingleUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchSingleUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.laoding = false;
    },
    [fetchSingleUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export default userSlice.reducer;
