import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { QUESTIONS_LENGTH } from "../../constants";
import Container from "../../components/Container";
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
    let newAnswersArray = [...answers];

    if (answer === quizItem.correct_answer) {
      newAnswersArray = [...answers, ...[true]];
    } else {
      newAnswersArray = [...answers, ...[false]];
    }

    if (newProgress === QUESTIONS_LENGTH) {
      navigation.navigate("Results", { quizList, answers: newAnswersArray });
    } else {
      setProgress(newProgress);
      setAnswers(newAnswersArray);
    }
  };

  return (
    <Container>
      <S.Text accessibilityRole="button" onPress={() => navigation.goBack()}>
        Go Back
      </S.Text>
      <S.Text accessibilityRole="heading">{quizItem.category}</S.Text>
      <S.Text>{quizItem.question}</S.Text>
      <S.Text accessibilityRole="button" onPress={() => handleAnswer("True")}>
        TRUE
      </S.Text>
      <S.Text accessibilityRole="button" onPress={() => handleAnswer("False")}>
        FALSE
      </S.Text>
      <StatusBar style="auto" />
    </Container>
  );
};

export default Quiz;
