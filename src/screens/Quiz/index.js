import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { QUESTIONS_LENGTH } from "../../constants";
import { Container, Text } from "../../components";

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
    <Container command={`quiz ${progress}/${QUESTIONS_LENGTH}`}>
      <Text accessibilityRole="button" onPress={() => navigation.goBack()}>
        Go Back
      </Text>
      <Text accessibilityRole="heading">{quizItem.category}</Text>
      <Text>{quizItem.question}</Text>
      <Text accessibilityRole="button" onPress={() => handleAnswer("True")}>
        TRUE
      </Text>
      <Text accessibilityRole="button" onPress={() => handleAnswer("False")}>
        FALSE
      </Text>
      <StatusBar style="auto" />
    </Container>
  );
};

export default Quiz;
