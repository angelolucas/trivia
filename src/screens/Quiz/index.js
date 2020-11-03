import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { QUESTIONS_LENGTH } from '../../constants';
import {
  Container,
  Display,
  Progress,
  Card,
  ResultBar,
  Button,
} from '../../components';

const Quiz = ({
  navigation,
  route: {
    params: { quizList },
  },
}) => {
  const [progress, setProgress] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState({});
  const quizItem = quizList.find((item) => item.id === progress);
  const handleNext = () => {
    if (progress === QUESTIONS_LENGTH) {
      navigation.navigate('Results', { quizList, answers });
    } else {
      setShowResult(false);
      setProgress(progress + 1);
    }
  };
  const handleResult = (answer) => {
    const newAnswersArray = { ...answers };

    if (answer === quizItem.answer) {
      newAnswersArray[progress] = 'Hit';
    } else {
      newAnswersArray[progress] = 'Miss';
    }

    setShowResult(true);
    setAnswers(newAnswersArray);
  };
  const result = answers[progress];

  return (
    <Container>
      <Display spacer="large" justifyContent="space-between">
        <Display.Item>
          <Progress current={progress} total={QUESTIONS_LENGTH} />
        </Display.Item>
        <Display.Item>
          <Card result={showResult ? quizItem.answer : ''}>
            {quizItem.question}
          </Card>
        </Display.Item>
        <Display.Item>
          <Display flexDirection="row" spacer="small">
            <Display.Item flex="1">
              <Button
                title="true"
                iconLeft="thumbs-up"
                color="green"
                onPress={() => handleResult('True')}
              />
            </Display.Item>
            <Display.Item flex="1">
              <Button
                title="false"
                iconLeft="thumbs-down"
                color="red"
                onPress={() => handleResult('False')}
              />
            </Display.Item>
          </Display>
        </Display.Item>
      </Display>
      {showResult && <ResultBar result={result} onPress={handleNext} />}
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
          answer: PropTypes.oneOf(['True', 'False']).isRequired,
        }),
      ),
    }),
  }).isRequired,
};

export default Quiz;
