import styled from 'styled-components/native';

export const ResultBar = styled.View(({ theme: { color } }) => ({
  background: color.gray,
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: 30,
}));
