import React from "react";
import * as S from "./styles";

const Container = ({ children, ...props }) => (
  <S.Container>{children}</S.Container>
);

export default Container;
