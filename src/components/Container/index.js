import React from "react";
import Text from "../Text";
import * as S from "./styles";

const Container = ({ children, command, ...props }) => (
  <S.Container>
    <Text>$ trivia-challenge {command}</Text>
    {children}
  </S.Container>
);

export default Container;
