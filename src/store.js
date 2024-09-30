import { configureStore } from "@reduxjs/toolkit";
import shadowReducer from "./features/shadowSlice";
import boxSliceReducer from "./features/boxSlice";

export const store = configureStore({
  reducer: {
    shadow: shadowReducer,
    box: boxSliceReducer,
  }
});
