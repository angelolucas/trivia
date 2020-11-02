import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Text = ({ children, align, ...props }) => (
  <S.Text align={align} {...props}>
    {children}
  </S.Text>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf('left', 'center', 'right'),
};

Text.defaultProps = {
  align: 'left',
};

export default Text;
