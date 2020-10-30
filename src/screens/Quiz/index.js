import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { QUESTIONS_LENGTH } from "../../constants";
import * as S from "./styles";

const Quiz = ({ navigation, route: { params } }) => {
  const [progress, setProgress] = useState(0);
  const [hits, setHits] = useState(0);
  const quiz = params[progress];

  const handleAnswer = (answer) => {
    const newProgress = progress + 1;

    if (answer === quiz.correct_answer) {
      setHits(hits + 1);
    }

    if (newProgress === QUESTIONS_LENGTH) {
      navigation.navigate("Results");
    } else {
      setProgress(newProgress);
    }
  };

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
