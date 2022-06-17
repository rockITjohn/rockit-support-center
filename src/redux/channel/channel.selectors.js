import { createSelector } from "@reduxjs/toolkit";

export const selectChannel = createSelector((state) => state.channel);
