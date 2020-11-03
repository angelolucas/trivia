import React from 'react';
import PropTypes from 'prop-types';
import { Html5Entities } from 'html-entities';
import { QUESTIONS_LENGTH } from '../../constants';
import { Container, Display, Text, Button } from '../../components';

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
      <Display justifyContent="space-between">
        <Display.Item>
          <Text accessibilityRole="heading">TRIVIA CHALLENGE</Text>
        </Display.Item>
        <Display.Item>
          <Text accessibilityRole="heading" aria-level="2">
            Hey! You will be presented with 10 <Text color="green">true</Text>{' '}
            or <Text color="red">false</Text> questions about computers.
          </Text>
          <Text accessibilityRole="heading">Can you score 100%?</Text>
        </Display.Item>
        <Display.Item>
          <Display spacer="small">
            <Display.Item>
              <Button
                title="Newbie"
                iconRight="arrow-right"
                onPress={() => handleBegin('easy')}
              />
            </Display.Item>
            <Display.Item>
              <Button
                title="Geek"
                iconRight="arrow-right"
                onPress={() => handleBegin('medium')}
              />
            </Display.Item>
            <Display.Item>
              <Button
                title="Hacker"
                iconRight="arrow-right"
                onPress={() => handleBegin('hard')}
              />
            </Display.Item>
          </Display>
        </Display.Item>
      </Display>
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Home;
