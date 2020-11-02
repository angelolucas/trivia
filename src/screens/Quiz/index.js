import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { QUESTIONS_LENGTH } from '../../constants';
import { Container, Text } from '../../components';

const Quiz = ({
  navigation,
  route: {
    params: { quizList },
  },
}) => {
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState([]);
  const quizItem = quizList[progress];

  const handleAnswer = (answer) => {
    const newProgress = progress + 1;
    let newAnswersArray = [...answers];

    if (answer === quizItem.answer) {
      newAnswersArray = [...answers, ...[true]];
    } else {
      newAnswersArray = [...answers, ...[false]];
    }

    if (newProgress === QUESTIONS_LENGTH) {
      navigation.navigate('Results', { quizList, answers: newAnswersArray });
    } else {
      setProgress(newProgress);
      setAnswers(newAnswersArray);
    }
  };

  return (
    <Container>
      <Text accessibilityRole="button" onPress={() => navigation.goBack()}>
        Go Back
      </Text>
      <Text>{quizItem.question}</Text>
      <Text accessibilityRole="button" onPress={() => handleAnswer('True')}>
        TRUE
      </Text>
      <Text accessibilityRole="button" onPress={() => handleAnswer('False')}>
        FALSE
      </Text>
    </Container>
  );
};

Quiz.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      quizList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          question: PropTypes.string.isRequired,
          answer: PropTypes.string.isRequired,
        }),
      ),
    }),
  }).isRequired,
};

export default Quiz;
