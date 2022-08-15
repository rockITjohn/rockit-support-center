import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  previousSearches: [],
  customerName: "",
  emailAddress: "",
  uuid: uuidv4(),
};

const persistedSlice = createSlice({
  name: "persistedSlice",
  initialState,
  reducers: {
    addSearchToPreviousSearches: (state, action) => {
      state.previousSearches.push(action.payload);
    },
    setCustomerName: (state, action) => {
      state.customerName = action.payload;
    },
    setEmailAddress: (state, action) => {
      state.emailAddress = action.payload;
    },
  },
});

export const { addSearchToPreviousSearches, setCustomerName, setEmailAddress } =
  persistedSlice.actions;

export default persistedSlice.reducer;
