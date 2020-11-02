import React from 'react';
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

export default Container;
