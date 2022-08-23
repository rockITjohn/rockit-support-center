import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: "us-east-1",
  apiGatewayEndpoint:
    "https://r0pkyykhlc.execute-api.us-east-1.amazonaws.com/Prod/",
  contactFlowId: "0e267194-68b1-4bae-bc4d-4c99c839e35e",
  instanceId: "d604894d-373d-4165-a403-25e4e6fbd617",
  contactAttr: {},
  enableAttachments: false,
  preChatForm: "",
  primaryColor: "",
  description: "",
  showGetEmailModal: false,
  hasShownGetEmailModal: false,
  showSendEmailModal: false,
};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    setAppAttribute: (state, action) => {
      let attributeToUpdate = action.payload.attribute;
      state[attributeToUpdate] = action.payload.data;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setContactAttr: (state, action) => {
      state.contactAttr = action.payload;
    },
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setShowGetEmailModal: (state, action) => {
      state.showGetEmailModal = action.payload;
    },
    setHasShownGetEmailModal: (state, action) => {
      state.hasShownGetEmailModal = action.payload;
    },
    setShowSendEmailModal: (state, action) => {
      state.showSendEmailModal = action.payload;
    },
  },
});

export const {
  setAppAttribute,
  setContactAttr,
  setPrimaryColor,
  setDescription,
  setShowGetEmailModal,
  setHasShownGetEmailModal,
  setShowSendEmailModal,
} = appSlice.actions;

export default appSlice.reducer;
