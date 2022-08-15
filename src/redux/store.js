import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // tells us what we want to persist.
  storage: storage,
  blacklist: ["chatReducer", "appReducer", "searchReducer"], //here add reducers we don't want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [createLogger()],
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
