import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers } from "./userApi";

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
