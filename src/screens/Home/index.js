import { StatusBar } from "expo-status-bar";
import React from "react";
import { Html5Entities } from "html-entities";
import { QUESTIONS_LENGTH } from "../../constants";
import { Container, Text } from "../../components";

const Home = ({ navigation }) => {
  const entities = new Html5Entities();

  const fecthQuiz = fetch(
    `https://opentdb.com/api.php?amount=${QUESTIONS_LENGTH}&difficulty=hard&type=boolean`
  )
    .then((response) => response.json())
    .then(({ results }) =>
      results.map(({ question, correct_answer }) => ({
        question: entities.decode(question),
        correct_answer,
      }))
    );

  const handleBegin = () => {
    fecthQuiz.then((quizList) => navigation.navigate("Quiz", { quizList }));
  };

  return (
    <Container>
      <Text accessibilityRole="heading">Welcome to the Trivia Challenge!</Text>
      <Text accessibilityRole="heading" aria-level="2">
        You will be presented with 10 True of False Questions
      </Text>
      <Text accessibilityRole="heading" aria-level="3">
        Can you score 100%
      </Text>
      <Text accessibilityRole="button" onPress={handleBegin}>
        Begin
      </Text>
      <StatusBar style="auto" />
    </Container>
  );
};

export default Home;
