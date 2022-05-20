import { createSlice } from "@reduxjs/toolkit";
import { TestState } from "./types";

const initialState: TestState = {
  numberOfQuestion: 1,
  score: 12,
};

const mathTestSlice = createSlice({
  name: "mathTest",
  initialState,
  reducers: {
    setNumberOfQuestion(state) {
      state.numberOfQuestion = state.numberOfQuestion + 1;
    },
    countScore(state) {
      state.score = state.score - 1;
    },
  },
});

export const { setNumberOfQuestion, countScore } = mathTestSlice.actions;

export default mathTestSlice.reducer;
