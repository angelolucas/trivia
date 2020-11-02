import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Text = ({ children, ...props }) => <S.Text {...props}>{children}</S.Text>;

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
