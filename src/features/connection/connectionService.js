import { createAsyncThunk } from "@reduxjs/toolkit";
import { followUser, getUserConnections, unFollowUser } from "./connectionApi";

export const loadConnections = createAsyncThunk(
  "profile/connections",
  async ({ userId }) => {
    const response = await getUserConnections({ userId });
    if (response.success) {
      return {
        followers: response.followers,
        following: response.following,
        suggestions: response.suggestions,
      };
    } else {
      return {
        error: response,
      };
    }
  }
);
export const loadUserConnections = createAsyncThunk(
  "user/connections",
  async ({ userId }) => {
    const response = await getUserConnections({ userId });
    if (response.success) {
      return {
        userFollowing: response.following,
        userFollowers: response.followers,
        userSuggestions: response.suggestions,
      };
    } else {
      return {
        error: response,
      };
    }
  }
);

export const followUserAsync = createAsyncThunk(
  "user/followUser",
  async ({ followId, token }) => {
    const response = await followUser({ followId, token });
    console.log(response);
    if (response.success) {
      return {
        userToFollow: response.userToFollow,
        userFollowing: response.userFollowing,
      };
    } else {
      return {
        error: response,
      };
    }
  }
);
export const unfollowUserAsync = createAsyncThunk(
  "user/unfollowUser",
  async (followId) => {
    const response = await unFollowUser(followId);
    if (response.success) {
      return {
        userFollowing: response.userFollowing,
        userToUnfollow: response.userToUnfollow,
      };
    } else {
      return {
        error: response,
      };
    }
  }
);
