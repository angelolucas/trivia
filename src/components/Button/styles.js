import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity(({ theme: { color } }) => ({
  backgroundColor: color.gray,
  borderRadius: 4,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 18,
}));

export const Text = styled.Text(({ theme: { color, fontFamily } }) => ({
  color: color.text,
  fontSize: 22,
  fontFamily,
}));
