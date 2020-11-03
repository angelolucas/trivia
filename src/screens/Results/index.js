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
    (total, correct) => (correct ? total + 1 : total),
    0,
  );

  return (
    <Container>
      <Display justifyContent="space-between">
        <Display.Item>
          <Text accessibilityRole="heading">
            You scored {hits}/{QUESTIONS_LENGTH}
          </Text>
        </Display.Item>
        <Display.Item>
          {quizList.map(({ id }) => (
            <Fragment key={id}>
              <Text>
                {id} = {answers[id] === 'Hit' ? ':D' : ':('}
              </Text>
            </Fragment>
          ))}
        </Display.Item>
        <Display.Item>
          <Button
            title="play again"
            iconRight="dice"
            onPress={() => navigation.navigate('Home')}
          />
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
      answers: PropTypes.shape({
        [PropTypes.number]: PropTypes.oneOf(['Hit', 'Miss']).isRequired,
      }),
    }),
  }).isRequired,
};

export default Results;
