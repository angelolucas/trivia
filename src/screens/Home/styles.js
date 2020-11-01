import styled from "styled-components/native";

export const Welcome = styled.Text(({ theme: { color, fontFamily } }) => ({
  color: color.text,
  fontFamily,
  fontSize: 16,
  color: color.green,
}));

export const Text = styled.Text(({ theme: { color, fontFamily } }) => ({
  color: color.text,
  fontSize: 30,
  fontFamily,
}));
