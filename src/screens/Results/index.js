import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { QUESTIONS_LENGTH } from '../../constants';
import { Container, Text } from '../../components';

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
    <Container command="ends">
      <Text accessibilityRole="heading">
        You scored {hits}/{QUESTIONS_LENGTH}
      </Text>
      {quizList.map((quizItem, index) => (
        <Fragment key={index}>
          <Text>{quizItem.question}</Text>
          <Text>
            {answers[index] ? "+ You're right" : '- You Missed'}, the answers is{' '}
            {quizItem.correct_answer}
          </Text>
        </Fragment>
      ))}
      <Text
        accessibilityRole="button"
        onPress={() => navigation.navigate('Home')}
      >
        Try again
      </Text>
      <StatusBar style="auto" />
    </Container>
  );
};

export default Results;
