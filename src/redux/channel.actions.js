import ChannelActionTypes from "./channel.types";

export const setChannel = (channel) => ({
  type: ChannelActionTypes.CHANGE_CHANNEL,
  payload: channel,
});
