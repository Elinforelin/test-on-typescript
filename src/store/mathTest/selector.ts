import { RootStateTypes } from "../RootStateTypes";

export const selectNumberOfTest = (state: RootStateTypes) =>
  state.mathTest.numberOfQuestion;
export const selectScore = (state: RootStateTypes) => state.mathTest.score;
