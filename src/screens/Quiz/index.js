import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { QUESTIONS_LENGTH } from '../../constants';
import { Container, Progress, Text, Button } from '../../components';

const Quiz = ({
  navigation,
  route: {
    params: { quizList },
  },
}) => {
  const [progress, setProgress] = useState(1);
  const [answers, setAnswers] = useState({});
  const quizItem = quizList.find((item) => item.id === progress);
  const handleAnswer = (answer) => {
    const newAnswersArray = { ...answers };

    if (answer === quizItem.answer) {
      newAnswersArray[progress] = true;
    } else {
      newAnswersArray[progress] = false;
    }

    if (progress === QUESTIONS_LENGTH) {
      navigation.navigate('Results', { quizList, answers: newAnswersArray });
    } else {
      setProgress(progress + 1);
      setAnswers(newAnswersArray);
    }
  };

  return (
    <Container>
      <Progress current={progress} total={QUESTIONS_LENGTH} />
      <Text>{quizItem.question}</Text>
      <Button title="true" onPress={() => handleAnswer(true)} />
      <Button title="false" onPress={() => handleAnswer(false)} />
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
          answer: PropTypes.bool.isRequired,
        }),
      ),
    }),
  }).isRequired,
};

export default Quiz;
