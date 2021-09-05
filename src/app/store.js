import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/post/postSlice";
import userReducer from "../features/user/userSlice";
import connectionReducer from "../features/connection/connectionSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    post: postReducer,
    user: userReducer,
    connection: connectionReducer,
  },
});
