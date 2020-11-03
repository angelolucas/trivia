import styled from 'styled-components/native';

export const Card = styled.View(({ borderColor, theme: { color } }) => ({
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: color[borderColor],
  borderRadius: 4,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 30,
  minHeight: 340,
  position: 'relative',
}));

export const Result = styled.Text({
  top: 30,
  left: 30,
  position: 'absolute',
});
