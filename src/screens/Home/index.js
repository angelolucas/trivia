import { StatusBar } from "expo-status-bar";
import React from "react";
import * as S from "./styles";

const Home = ({ navigation }) => (
  <S.Container>
    <S.Text accessibilityRole="heading">
      Welcome to the Trivia Challenge!
    </S.Text>
    <S.Text accessibilityRole="heading" aria-level="2">
      You will be presented with 10 True of False Questions
    </S.Text>
    <S.Text accessibilityRole="heading" aria-level="3">
      Can you score 100%
    </S.Text>
    <S.Text
      accessibilityRole="button"
      onPress={() => navigation.navigate("Quiz")}
    >
      Begin
    </S.Text>
    <StatusBar style="auto" />
  </S.Container>
);

export default Home;
