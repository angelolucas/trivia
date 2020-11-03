/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'expo-status-bar';
import * as S from './styles';

const Container = ({ children, ...props }) => (
  <S.Container
    contentContainerStyle={{ minHeight: '100%', padding: 30 }}
    {...props}
  >
    <StatusBar style="auto" />
    {children}
  </S.Container>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
