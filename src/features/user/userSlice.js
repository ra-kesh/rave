import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "./userService";

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
  },
});

export default userSlice.reducer;
