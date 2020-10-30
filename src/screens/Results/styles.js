import styled from "styled-components/native";

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
  alignItems: "center",
  justifyContent: "center",
}));

export const Text = styled.Text(({ theme }) => ({
  color: theme.text,
}));
