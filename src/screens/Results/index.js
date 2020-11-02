import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { QUESTIONS_LENGTH } from '../../constants';
import { Container, Text, Button } from '../../components';

const Results = ({
  navigation,
  route: {
    params: { quizList, answers },
  },
}) => {
  const hits = Object.values(answers).reduce(
    (total, correct) => (correct ? total + 1 : total),
    0,
  );

  return (
    <Container>
      <Text accessibilityRole="heading">
        You scored {hits}/{QUESTIONS_LENGTH}
      </Text>
      {quizList.map(({ id, question, answer }) => (
        <Fragment key={id}>
          <Text>{question}</Text>
          <Text>
            {answers[id] ? "+ You're right" : '- You Missed'}, the answers is{' '}
            {answer}
          </Text>
        </Fragment>
      ))}
      <Button title="play again" onPress={() => navigation.navigate('Home')} />
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
          id: PropTypes.number.isRequired,
          question: PropTypes.string.isRequired,
          answer: PropTypes.bool.isRequired,
        }),
      ),
      answers: PropTypes.objectOf(PropTypes.number),
    }),
  }).isRequired,
};

export default Results;
