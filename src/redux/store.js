import { configureStore } from "@reduxjs/toolkit";
// import { createReducer } from "./reducer";
import { rootReducer } from "./reducer";
import { createLogger } from "redux-logger";

const store = configureStore({
  reducer: rootReducer,
  middleware: [createLogger()],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
