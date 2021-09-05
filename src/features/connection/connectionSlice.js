import { createSlice } from "@reduxjs/toolkit";
import { loadConnections } from "./connectionService";

const initialState = {
  followers: [],
  following: [],
  suggestions: [],
  loading: false,
  error: null,
};

export const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    resetConnections: () => {
      return initialState;
    },
  },
  extraReducers: {
    [loadConnections.pending]: (state) => {
      state.loading = true;
    },
    [loadConnections.fulfilled]: (state, action) => {
      state.loading = false;
      state.suggestions = action.payload.suggestions;
      state.followers = action.payload.followers;
      state.following = action.payload.following;
    },
    [loadConnections.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const { resetConnections } = connectionSlice.actions;

export default connectionSlice.reducer;
