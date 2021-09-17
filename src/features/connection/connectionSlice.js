import { createSlice } from "@reduxjs/toolkit";
import {
  followUserAsync,
  loadConnections,
  loadUserConnections,
  unfollowUserAsync,
} from "./connectionService";

const initialState = {
  followers: [],
  following: [],
  userFollowing: [],
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
    [loadUserConnections.pending]: (state) => {
      state.loading = true;
    },
    [loadUserConnections.fulfilled]: (state, action) => {
      state.loading = false;
      state.userFollowing = action.payload.userFollowing;
      state.userFollowers = action.payload.userFollowers;
      state.userSuggestions = action.payload.userSuggestions;
    },
    [loadUserConnections.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [followUserAsync.pending]: (state) => {
      state.loading = true;
    },
    [followUserAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.userFollowing = action.payload.userFollowing;
      state.userSuggestions = state.userSuggestions.filter(
        (user) => user._id !== action.payload.userToFollow._id
      );
    },
    [followUserAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [unfollowUserAsync.pending]: (state) => {
      state.loading = true;
    },
    [unfollowUserAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.userFollowing = action.payload.userFollowing;
      // state.userSuggestions = state.userSuggestions.concat(
      //   action.payload.userToUnfollow
      // );
    },
    [unfollowUserAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const { resetConnections } = connectionSlice.actions;

export default connectionSlice.reducer;
