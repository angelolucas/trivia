import styled from 'styled-components/native';

export const Container = styled.ScrollView(({ theme: { color } }) => ({
  flex: 1,
  backgroundColor: color.background,
  padding: '50px 30px 30px',
}));
