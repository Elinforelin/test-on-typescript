import { configureStore } from "@reduxjs/toolkit";
import mathTestSlice from "./mathTest/reducer";

export const store = configureStore({
  reducer: {
    mathTest: mathTestSlice,
  },
});
