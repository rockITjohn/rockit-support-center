import ChannelActionTypes from "./channel.types";

const INITIAL_STATE = {
  channel: "default",
};

const channelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ChannelActionTypes.CHANGE_CHANNEL:
      return {
        ...state,
        channel: action.payload,
      };
    default:
      return state;
  }
};

export default channelReducer;
