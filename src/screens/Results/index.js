import React from "react";
import { StatusBar } from "expo-status-bar";
import { QUESTIONS_LENGTH } from "../../constants";
import * as S from "./styles";

const Results = ({
  route: {
    params: { quizList, answers },
  },
}) => {
  const hits = answers.reduce((acc, curr) => (curr ? acc + 1 : acc));

  return (
    <S.Container>
      <S.Text accessibilityRole="heading">
        You scored {hits}/{QUESTIONS_LENGTH}
      </S.Text>
      <StatusBar style="auto" />
    </S.Container>
  );
};

export default Results;
