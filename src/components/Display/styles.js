import styled from 'styled-components/native';

export const Display = styled.View(
  ({ alignItems, flexDirection, justifyContent, margin }) => ({
    alignItems,
    flexDirection,
    justifyContent,
    margin: -margin,
    flex: 'auto',
  }),
);

export const Item = styled.View(({ margin, flex }) => ({
  margin,
  flex,
}));
