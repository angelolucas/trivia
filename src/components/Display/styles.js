import styled from 'styled-components/native';

export const Display = styled.View(
  ({ alignItems, flexDirection, justifyContent, margin }) => ({
    alignItems,
    flexDirection,
    justifyContent,
    height: '100%',

    margin: -margin,
  }),
);

export const Item = styled.View(({ margin, flex }) => ({
  margin,
  flex,
}));
