import styled from "styled-components/native";

export const Container = styled.View(({ theme: { color } }) => ({
  flex: 1,
  backgroundColor: color.background,
  alignItems: "center",
  justifyContent: "center",
}));

export const Text = styled.Text(({ theme: { color, fontFamily } }) => ({
  color: color.text,
  fontSize: 30,
  fontFamily,
}));
