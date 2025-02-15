import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slices/global.slice";

export const store = configureStore({
  reducer: {
    app: globalSlice,
  },
});

export default store;
