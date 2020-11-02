import React from 'react';
import * as S from './styles';

const Text = ({ children, ...props }) => <S.Text {...props}>{children}</S.Text>;

export default Text;
