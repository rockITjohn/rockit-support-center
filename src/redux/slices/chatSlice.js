import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeChat: false,
};

export const chatSlice = createSlice({
  name: "chatReducer",
  initialState,
  reducers: {
    setActiveChat: (state, action) => {
      state.activeChat = action.payload;
    },
  },
});

export const { setActiveChat } = chatSlice.actions;

export default chatSlice.reducer;
