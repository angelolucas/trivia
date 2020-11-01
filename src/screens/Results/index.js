import React, { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { QUESTIONS_LENGTH } from "../../constants";
import Container from "../../components/Container";
import * as S from "./styles";

const Results = ({
  navigation,
  route: {
    params: { quizList, answers },
  },
}) => {
  const hits = answers.reduce(
    (total, correct) => (correct ? total + 1 : total),
    0
  );

  return (
    <Container>
      <S.Text accessibilityRole="heading">
        You scored {hits}/{QUESTIONS_LENGTH}
      </S.Text>
      {quizList.map((quizItem, index) => (
        <Fragment key={index}>
          <S.Text>{quizItem.question}</S.Text>
          <S.Text>
            {answers[index] ? "+ You're right" : "- You Missed"}, the answers is{" "}
            {quizItem.correct_answer}
          </S.Text>
        </Fragment>
      ))}
      <S.Text
        accessibilityRole="button"
        onPress={() => navigation.navigate("Home")}
      >
        Try again
      </S.Text>
      <StatusBar style="auto" />
    </Container>
  );
};

export default Results;
