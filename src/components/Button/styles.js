import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity(({ color, align, theme }) => ({
  backgroundColor: theme.color[color],
  borderRadius: 4,
  flexDirection: 'row',
  justifyContent: align === 'center' ? 'center' : 'space-between',
  alignItems: 'center',
  padding: 18,
}));
