import styled from 'styled-components/native';

export const Container = styled.View(({ theme: { color } }) => ({
  flex: 1,
  backgroundColor: color.background,
  padding: '50px 20px',
}));
