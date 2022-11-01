import { createSlice } from "@reduxjs/toolkit";
/*
 * rockITphone Information:
 * API Gateway: https://r0pkyykhlc.execute-api.us-east-1.amazonaws.com/Prod/
 * Contact Flow ID: 0e267194-68b1-4bae-bc4d-4c99c839e35e
 * Instance ID: d604894d-373d-4165-a403-25e4e6fbd617
 *
 * Explore Connect Information:
 * API Gateway: https://9grtz88f1j.execute-api.us-east-1.amazonaws.com/Prod/
 * Contact Flow ID: 75946832-d000-4367-9fd2-308d45d877b4
 * Instance ID: 1e6dd5f6-4499-4428-8a2d-fb54596003bf
 *
 */

const initialState = {
  region: "us-east-1",
  apiGatewayEndpoint:
    "https://9grtz88f1j.execute-api.us-east-1.amazonaws.com/Prod/",
  contactFlowId: "75946832-d000-4367-9fd2-308d45d877b4",
  instanceId: "1e6dd5f6-4499-4428-8a2d-fb54596003bf",
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
