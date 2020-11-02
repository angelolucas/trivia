import React from 'react';
import PropTypes from 'prop-types';
import { Html5Entities } from 'html-entities';
import { QUESTIONS_LENGTH } from '../../constants';
import { Container, Text, Button } from '../../components';

const Home = ({ navigation }) => {
  const entities = new Html5Entities();

  const fecthQuiz = (difficulty) =>
    fetch(
      `https://opentdb.com/api.php?amount=${QUESTIONS_LENGTH}&category=18&difficulty=${difficulty}&type=boolean`,
    )
      .then((response) => response.json())
      .then(({ results }) =>
        results.map((item, index) => ({
          id: index + 1,
          question: entities.decode(item.question),
          answer: item.correct_answer === 'True',
        })),
      );

  const handleBegin = (difficulty) => {
    fecthQuiz(difficulty).then((quizList) =>
      navigation.navigate('Quiz', { quizList }),
    );
  };

  return (
    <Container>
      <Text accessibilityRole="heading">Welcome to the Trivia Challenge!</Text>
      <Text accessibilityRole="heading" aria-level="2">
        You will be presented with 10 True of False Questions about computers.
        Can you score 100%?
      </Text>
      <Button title="Newbie" onPress={() => handleBegin('easy')} />
      <Button title="Geek" onPress={() => handleBegin('medium')} />
      <Button title="Hacker" onPress={() => handleBegin('hard')} />
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Home;
