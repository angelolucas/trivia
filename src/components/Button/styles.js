import styled from 'styled-components/native';

export const Text = styled.Text(({ theme: { color, fontFamily } }) => ({
  backgroundColor: color.gray,
  borderRadius: 4,
  color: color.text,
  padding: 18,
  fontSize: 22,
  fontFamily,
}));
