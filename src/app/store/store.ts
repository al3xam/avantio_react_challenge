import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import globalSlice from "./slices/global.slice";

export const store = configureStore({
  reducer: {
    app: globalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
