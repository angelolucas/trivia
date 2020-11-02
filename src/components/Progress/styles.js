import styled from 'styled-components/native';

export const ProgressBar = styled.View({
  flexDirection: 'row',
  marginLeft: -2,
  marginRight: -2,
  marginBottom: 15,
});

export const ProgressItem = styled.View(({ active, theme: { color } }) => ({
  flex: 1,
  backgroundColor: active ? color.green : color.gray,
  height: 3,
  margin: 2,
}));
