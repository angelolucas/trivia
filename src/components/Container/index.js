/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'expo-status-bar';
import * as S from './styles';

const Container = ({ children, ...props }) => (
  <S.Container {...props}>
    {children}
    <StatusBar style="auto" />
  </S.Container>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
