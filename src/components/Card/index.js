import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import * as S from './styles';

const color = {
  True: 'green',
  False: 'red',
};

const Card = ({ children, result }) => (
  <S.Card borderColor={color[result] || 'gray'}>
    {result !== '' && (
      <S.Result size="small" as={Text} color={color[result]}>
        {result}
      </S.Result>
    )}
    <Text>{children}</Text>
  </S.Card>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  result: PropTypes.string,
};

Card.defaultProps = {
  result: undefined,
};

export default Card;
