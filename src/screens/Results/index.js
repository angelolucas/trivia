import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { QUESTIONS_LENGTH } from '../../constants';
import { Container, Display, Text, Button } from '../../components';

const Results = ({
  navigation,
  route: {
    params: { quizList, answers },
  },
}) => {
  const hits = Object.values(answers).reduce(
    (total, correct) => (correct === 'Hit' ? total + 1 : total),
    0,
  );
  const hitMost = (hits * 100) / QUESTIONS_LENGTH > 50;

  return (
    <Container>
      <Display spacer="large" justifyContent="space-between">
        <Display.Item>
          <Text align="center">
            {hitMost ? 'WOW! Incredible.' : 'You can do it better. Try again.'}
          </Text>
          <Text size="medium" align="center" accessibilityRole="heading">
            You scored {hits}/{QUESTIONS_LENGTH}
          </Text>
        </Display.Item>
        <Display.Item>
          {quizList.map(({ id, question, answer }) => {
            const correctAnswer = answer === 'True';
            const hit = answers[id] === 'Hit';

            return (
              <Fragment key={id}>
                <Text size="small">
                  {id} - {question}
                </Text>
                <Text size="small" style={{ marginBottom: 40 }}>
                  <Text color={hit ? 'green' : 'red'} size="small">
                    {hit ? "You're right" : 'You missed'}
                  </Text>{' '}
                  the answer is{' '}
                  <Text size="small" color={correctAnswer ? 'green' : 'red'}>
                    {answer}
                  </Text>
                  .
                </Text>
              </Fragment>
            );
          })}
        </Display.Item>
        <Display.Item>
          <Button
            title="play again"
            iconRight="dice"
            onPress={() => navigation.navigate('Home')}
          />
        </Display.Item>
        <Display.Item>
          <Text size="small" align="center">
            made with <Icon name="heart" color="green" /> by{' '}
            <Text
              color="green"
              size="small"
              onPress={() => Linking.openURL('http://angelolucas.github.io/')}
            >
              Angelo
            </Text>
          </Text>
        </Display.Item>
      </Display>
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
          answer: PropTypes.oneOf(['True', 'False']).isRequired,
        }),
      ),
      // eslint-disable-next-line react/forbid-prop-types
      answers: PropTypes.object.isRequired,
    }),
  }).isRequired,
};

export default Results;
