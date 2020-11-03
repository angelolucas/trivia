import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const fontSize = {
  small: 18,
  medium: 22,
  large: 30,
};

const Text = ({ children, align, color, size, ...props }) => (
  <S.Text align={align} color={color} fontSize={fontSize[size]} {...props}>
    {children}
  </S.Text>
);

Text.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  color: PropTypes.oneOf(['text', 'green', 'red']),
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Text.defaultProps = {
  align: 'left',
  color: 'text',
  size: 'large',
};

export default Text;
