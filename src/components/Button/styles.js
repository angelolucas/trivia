import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity(({ color, align, theme }) => ({
  backgroundColor: theme.color[color],
  borderRadius: 4,
  flexDirection: 'row',
  justifyContent: align === 'center' ? 'center' : 'space-between',
  alignItems: 'center',
  padding: 18,
}));

export const Text = styled.Text(({ theme: { color, fontFamily } }) => ({
  color: color.text,
  fontSize: 22,
  fontFamily,
}));
