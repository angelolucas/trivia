import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Button = ({ children, ...props }) => (
  <S.Button {...props}>{children}</S.Button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
