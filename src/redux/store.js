import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import channelReducer from "./channel.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV === "development") {
    return composeWithDevTools(applyMiddleware(logger, ...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(channelReducer, bindMiddleware([]));

export default store;
