import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Html5Entities } from 'html-entities';
import { QUESTIONS_LENGTH } from '../../constants';
import { Container, Text } from '../../components';

const Home = ({ navigation }) => {
  const [difficulty, setDifficulty] = useState('easy');

  const entities = new Html5Entities();

  const fecthQuiz = () => fetch(
    `https://opentdb.com/api.php?amount=${QUESTIONS_LENGTH}&category=18&difficulty=${difficulty}&type=boolean`,
  )
    .then((response) => response.json())
    .then(({ results }) => results.map((item, index) => ({
      id: index,
      question: entities.decode(item.question),
      answer: item.correct_answer,
    })));

  const handleBegin = () => {
    fecthQuiz().then((quizList) => navigation.navigate('Quiz', { quizList }));
  };

  return (
    <Container>
      <Text accessibilityRole="heading">Welcome to the Trivia Challenge!</Text>
      <Text accessibilityRole="heading" aria-level="2">
        You will be presented with 10 True of False Questions about computers.
        Can you score 100%?
      </Text>
      <Text>--- Tell mew more about you ---</Text>
      <Text onPress={() => setDifficulty('easy')}>Newbie</Text>
      <Text onPress={() => setDifficulty('medium')}>Geek</Text>
      <Text onPress={() => setDifficulty('hard')}>Hacker</Text>
      <Text accessibilityRole="button" onPress={handleBegin}>
        Begin
      </Text>
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Home;
