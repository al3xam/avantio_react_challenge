import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";

import {
  accommodationData,
  initialState,
  initialStateType,
  ownerData,
} from "../states/global.state";

const globalSlice: Slice<initialStateType> = createSlice({
  name: "App",
  initialState,
  reducers: {
    updateCurrentStep: (
      state: WritableDraft<initialStateType>,
      action: PayloadAction<number>
    ) => {
      state.stepper.currentStep = action.payload;
    },
    updateAccomodationData: (
      state: WritableDraft<initialStateType>,
      action: PayloadAction<accommodationData>
    ) => {
      state.stepper.data.accommodation = action.payload;
    },
    updateOwnerData: (
      state: WritableDraft<initialStateType>,
      action: PayloadAction<ownerData>
    ) => {
      state.stepper.data.owner = action.payload;
    },
  },
});

export const { updateCurrentStep, updateAccomodationData, updateOwnerData } =
  globalSlice.actions;
export default globalSlice.reducer;
