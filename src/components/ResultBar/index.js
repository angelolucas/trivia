import React from 'react';
import PropTypes from 'prop-types';
import Display from '../Display';
import Text from '../Text';
import Button from '../Button';
import Icon from '../Icon';
import * as S from './styles';

const ResultBar = ({ result, onPress }) => {
  const correctAnswer = result === 'Hit';

  return (
    <S.ResultBar>
      <Display
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Icon
          name={correctAnswer ? 'smile-beam' : 'sad-cry'}
          color={correctAnswer ? 'green' : 'red'}
          size={30}
        />
        <Text size="medium">
          {correctAnswer ? "You're right!" : 'You missed!'}
        </Text>
        <Button
          iconRight="arrow-right"
          title="next"
          color="blue"
          onPress={onPress}
        />
      </Display>
    </S.ResultBar>
  );
};

ResultBar.propTypes = {
  result: PropTypes.oneOf(['Hit', 'Miss']),
  onPress: PropTypes.func.isRequired,
};

ResultBar.defaultProps = {
  result: undefined,
};

export default ResultBar;
