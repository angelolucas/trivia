import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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
    0,
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
    </Container>
  );
};

Results.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      quizList: PropTypes.arrayOf(
        PropTypes.shape({
          question: PropTypes.string.isRequired,
          correct_answer: PropTypes.string.isRequired,
        }),
      ),
      answers: PropTypes.arrayOf(PropTypes.bool),
    }),
  }).isRequired,
};

export default Results;
