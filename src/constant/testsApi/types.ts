export type Test = {
  name: string;
  pathname: string;
  img: string;
  desc: string;
  questions: {
    number: number;
    text: string;
    answers: { answer: string; isCorrect: boolean }[];
  }[];
};
