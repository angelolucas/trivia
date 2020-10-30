import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import * as S from "./styles";

const Home = ({ navigation }) => (
  <S.Container>
    <Text accessibilityRole="heading">Welcome to the Trivia Challenge!</Text>
    <Text accessibilityRole="heading" aria-level="2">
      You will be presented with 10 True of False Questions
    </Text>
    <Text accessibilityRole="heading" aria-level="3">
      Can you score 100%
    </Text>
    <Text
      accessibilityRole="button"
      onPress={() => navigation.navigate("Quiz")}
    >
      Begin
    </Text>
    <StatusBar style="auto" />
  </S.Container>
);

export default Home;
