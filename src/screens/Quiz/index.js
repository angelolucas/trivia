import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { QUESTIONS_LENGTH } from "../../constants";
import * as S from "./styles";

const Quiz = ({
  navigation,
  route: {
    params: { quizList },
  },
}) => {
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState([]);
  const quiz = quizList[progress];

  const handleAnswer = (answer) => {
    const newProgress = progress + 1;

    if (answer === quiz.correct_answer) {
      setAnswers([...answers, ...[true]]);
    } else {
      setAnswers([...answers, ...[false]]);
    }

    if (newProgress === QUESTIONS_LENGTH) {
      console.log({ quiz, answers });
      navigation.navigate("Results", { quizList, answers });
    } else {
      setProgress(newProgress);
    }
  };

  console.log(answers);

  return (
    <S.Container>
      <S.Text accessibilityRole="heading">{quiz.category}</S.Text>
      <S.Text>{quiz.question}</S.Text>
      <S.Text accessibilityRole="button" onPress={() => handleAnswer("True")}>
        TRUE
      </S.Text>
      <S.Text accessibilityRole="button" onPress={() => handleAnswer("False")}>
        FALSE
      </S.Text>
      <StatusBar style="auto" />
    </S.Container>
  );
};

export default Quiz;
