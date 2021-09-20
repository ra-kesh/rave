import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./AuthApi";

export const userLogin = createAsyncThunk(
  "user/login",
  async (userCredentials) => {
    const response = await loginUser(userCredentials);
    if (response.data) {
      return {
        userInfo: response.data,
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

export const userSignup = createAsyncThunk(
  "user/signup",
  async (userCredentials) => {
    const response = await registerUser(userCredentials);
    if (response.data) {
      return {
        userInfo: response.data,
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

// export const userUpdate = createAsyncThunk(
//   "user/update",
//   async (data, token) => {
//     const response = await updateUser(data, token);
//     if (response.userInfo) {
//       return {
//         userInfo: response.userInfo,
//       };
//     } else {
//       return {
//         error: response,
//       };
//     }
//   }
// );
