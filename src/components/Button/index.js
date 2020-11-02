import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import * as S from './styles';

const Button = ({ onPress, justify, color, title, ...props }) => (
  <TouchableOpacity accessibilityRole="button" onPress={onPress}>
    <S.Text justify={justify} color={color} {...props}>
      {title}
    </S.Text>
  </TouchableOpacity>
);

Button.propTypes = {
  color: PropTypes.oneOf(['gray', 'green', 'red', 'light']),
  justify: PropTypes.oneOf(['center', 'space-between']),
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: 'gray',
  justify: 'center',
};

export default Button;
