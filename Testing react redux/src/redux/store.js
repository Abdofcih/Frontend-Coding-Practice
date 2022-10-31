import { configureStore } from "@reduxjs/toolkit";
import reducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    userState: reducer
  }
});
