import styled from "styled-components/native";

export const Text = styled.Text(({ theme: { color, fontFamily } }) => ({
  color: color.foreground,
  fontSize: 18,
  fontFamily,
  marginBottom: 10,
}));
