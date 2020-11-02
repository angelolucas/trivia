import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import * as S from './styles';

const Progress = ({ current, total }) => (
  <>
    <S.ProgressBar>
      {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
        <S.ProgressItem active={page === current} key={page} />
      ))}
    </S.ProgressBar>
    <Text align="right">
      {current} / {total}
    </Text>
  </>
);

Progress.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Progress;
