import styled from 'styled-components/native';

export const Text = styled.Text(({ align, color, fontSize, theme }) => ({
  color: theme.color[color],
  fontSize,
  fontFamily: theme.fontFamily,
  textAlign: align,
}));
