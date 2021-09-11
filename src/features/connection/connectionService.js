import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserConnections } from "./connectionApi";

export const loadConnections = createAsyncThunk(
  "user/connections",
  async ({ userId }) => {
    const response = await getUserConnections({ userId });
    if (response.success) {
      return {
        followers: response.folllowers,
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
