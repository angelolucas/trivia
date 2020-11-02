import styled from 'styled-components/native';

export const Text = styled.Text(({ align, color, theme }) => ({
  color: theme.color[color],
  fontSize: 30,
  fontFamily: theme.fontFamily,
  marginBottom: 10,
  textAlign: align,
}));
