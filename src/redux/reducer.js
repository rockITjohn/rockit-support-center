/**
 * Combine all reducers in this file and export the combined reducers.
 */

import chatReducer from "./slices/chatSlice";
import appReducer from "./slices/appSlice";
import searchReducer from "./slices/searchSlice";
import { combineReducers } from "@reduxjs/toolkit";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
// export function createReducer(injectedReducers = { chatReducer }) {
//   // Initially we don't have any injectedReducers, so returning identity function to avoid the error
//   if (Object.keys(injectedReducers).length === 0) {
//     return (state) => state;
//   } else {
//     return combineReducers({
//       ...injectedReducers,
//     });
//   }
// }

export const rootReducer = combineReducers({
  chatReducer,
  appReducer,
  searchReducer,
});
