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
  const quizItem = quizList[progress];

  const handleAnswer = (answer) => {
    const newProgress = progress + 1;

    if (answer === quizItem.correct_answer) {
      setAnswers([...answers, ...[true]]);
    } else {
      setAnswers([...answers, ...[false]]);
    }

    if (newProgress === QUESTIONS_LENGTH) {
      navigation.navigate("Results", { quizList, answers });
    } else {
      setProgress(newProgress);
    }
  };

  console.log(answers);

  return (
    <S.Container>
      <S.Text accessibilityRole="heading">{quizItem.category}</S.Text>
      <S.Text>{quizItem.question}</S.Text>
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
