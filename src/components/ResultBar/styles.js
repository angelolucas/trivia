import styled from 'styled-components/native';

export const ResultBar = styled.View(({ theme: { color } }) => ({
  background: color.gray,
  position: 'absolute',
  bottom: -30,
  left: -30,
  right: -30,
  padding: 30,
}));
