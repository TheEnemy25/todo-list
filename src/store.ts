import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/toolkitSlice";

export const store = configureStore({
  reducer: todoReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
