import { StatusBar } from "expo-status-bar";
import React from "react";
import { Html5Entities } from "html-entities";
import { QUESTIONS_LENGTH } from "../../constants";
import Container from "../../components/Container";
import * as S from "./styles";

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
      <S.Text accessibilityRole="heading">
        Welcome to the Trivia Challenge!
      </S.Text>
    <Container>
      <S.Text accessibilityRole="heading" aria-level="2">
        You will be presented with 10 True of False Questions
      </S.Text>
      <S.Text accessibilityRole="heading" aria-level="3">
        Can you score 100%
      </S.Text>
      <S.Text accessibilityRole="button" onPress={handleBegin}>
        Begin
      </S.Text>
      <StatusBar style="auto" />
    </Container>
  );
};

export default Home;
