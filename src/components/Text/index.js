import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Text = ({ children, align, color, ...props }) => (
  <S.Text align={align} color={color} {...props}>
    {children}
  </S.Text>
);

Text.propTypes = {
  align: PropTypes.oneOf('left', 'center', 'right'),
  color: PropTypes.oneOf('text', 'green', 'red'),
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  align: 'left',
  color: 'text',
};

export default Text;
