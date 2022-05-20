import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { type } from "os";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countScore, setNumberOfQuestion } from "../../store/mathTest/reducer";
import { selectNumberOfTest, selectScore } from "../../store/mathTest/selector";

import classes from "./styles.module.scss";

interface MathTestProps {
  questions: {
    number: number;
    text: string;
    answers: { answer: string; isCorrect: boolean }[];
  }[];
}

export const MathTest: FC<MathTestProps> = ({ questions }) => {
  const dispatch = useDispatch();
  const numberOfQuestion = useSelector(selectNumberOfTest);
  const score = useSelector(selectScore);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setError(false);
  };

  const onClickNextQuestion = () => {
    dispatch(setNumberOfQuestion());
    setError(false);
    setValue("");
    setHelperText("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event.target);

    event.preventDefault();
    const isAnswerCorrect = questions[numberOfQuestion].answers.find(
      ({ answer, isCorrect }) => {
        if (answer === value) {
          return isCorrect;
        }
      }
    );
    if (isAnswerCorrect) {
      setHelperText("Правильна відповідь");
      setError(false);
    } else if (isAnswerCorrect === undefined) {
      setHelperText("Неправильна відповідь");
      dispatch(countScore());
      setError(true);
    }
  };

  return (
    <div className={classes.wrapper}>
      {numberOfQuestion === 12 ? (
        <div>
          Ваш результат:{score}
          <div>
            {score <= 6 ? "Мейсон, не розстраюйся" : "Молодець! Розумник :)"}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={classes.body}>
          <FormControl sx={{ m: 3 }} error={error} variant="standard">
            <FormLabel className={classes.question} id="demo-error-radios">
              {questions[numberOfQuestion].number}.{" "}
              {questions[numberOfQuestion].text}
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              {questions[numberOfQuestion].answers.map(({ answer }) => (
                <FormControlLabel
                  className={classes.answer}
                  key={answer}
                  value={answer}
                  control={<Radio />}
                  label={answer}
                  disabled={helperText.length ? true : false}
                />
              ))}
            </RadioGroup>
            <FormHelperText
              className={error ? classes.helperText : classes.helperTextCorrect}
            >
              {helperText}
            </FormHelperText>
            <div className={classes.buttons}>
              <Button
                sx={{ mt: 1, mr: 1 }}
                type="submit"
                variant="outlined"
                className={classes.checkAnswer}
              >
                Перевірити
              </Button>
              <Button
                className={classes.submitBtn}
                onClick={onClickNextQuestion}
                disabled={
                  numberOfQuestion === questions.length || !helperText.length
                    ? true
                    : false
                }
              >
                Наступний
              </Button>
            </div>
          </FormControl>
        </form>
      )}
    </div>
  );
};
