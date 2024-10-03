import { configureStore } from "@reduxjs/toolkit";
import shadowsReducer from "./features/shadowsSlice";
import boxSliceReducer from "./features/boxSlice";

export const store = configureStore({
  reducer: {
    shadows: shadowsReducer,
    box: boxSliceReducer,
  }
});
