import styled from 'styled-components/native';

export const Text = styled.Text(({ align, theme: { color, fontFamily } }) => ({
  color: color.foreground,
  fontSize: 18,
  fontFamily,
  marginBottom: 10,
  textAlign: align,
}));
