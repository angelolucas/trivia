import { StatusBar } from "expo-status-bar";
import React from "react";
import * as S from "./styles";

const Results = () => (
  <S.Container>
    <S.Text accessibilityRole="heading">You scored</S.Text>
    <StatusBar style="auto" />
  </S.Container>
);

export default Results;
