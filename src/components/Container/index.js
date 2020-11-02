import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'expo-status-bar';
import Text from '../Text';
import * as S from './styles';

const Container = ({ children, command, ...props }) => (
  <S.Container {...props}>
    <Text>$ trivia-challenge {command}</Text>
    {children}
    <StatusBar style="auto" />
  </S.Container>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  command: PropTypes.string.isRequired,
};

export default Container;
