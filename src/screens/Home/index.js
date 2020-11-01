import { StatusBar } from "expo-status-bar";
import React from "react";
import Container from "../../components/Container";
import * as S from "./styles";

const Home = ({ navigation }) => {
  const fecthQuiz = fetch(
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  ).then((response) => response.json());

  const handleBegin = () => {
    fecthQuiz.then((data) =>
      navigation.navigate("Quiz", { quizList: data.results })
    );
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
