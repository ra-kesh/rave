import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers, getSingleUser } from "./userApi";

export const fetchAllUsers = createAsyncThunk(
  "post/fetchAllUsers",
  async () => {
    const response = await getAllUsers();
    if (response.users) {
      return {
        users: response.users,
        loading: false,
        error: null,
      };
    } else {
      return {
        error: response,
      };
    }
  }
);

export const fetchSingleUser = createAsyncThunk(
  "use/fetchSingleUser",
  async (userId) => {
    const response = await getSingleUser(userId);
    if (response.user) {
      return {
        user: response.user,
      };
    } else {
      return {
        error: response,
      };
    }
  }
);
