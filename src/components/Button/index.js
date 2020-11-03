import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ThemeContext } from 'styled-components/native';

import * as S from './styles';

const Button = ({
  align,
  onPress,
  color,
  iconLeft,
  iconRight,
  title,
  ...props
}) => {
  const theme = useContext(ThemeContext);

  return (
    <S.Button
      accessibilityRole="button"
      color={color}
      align={align}
      onPress={onPress}
    >
      {iconLeft && (
        <Icon
          name={iconLeft}
          style={{ marginRight: 10 }}
          size={16}
          color={theme.color.text}
        />
      )}
      <S.Text {...props}>{title}</S.Text>
      {iconRight && (
        <Icon
          name={iconRight}
          size={16}
          style={{ marginLeft: 10 }}
          color={theme.color.text}
        />
      )}
    </S.Button>
  );
};

Button.propTypes = {
  align: PropTypes.oneOf(['center', 'justified']),
  color: PropTypes.oneOf(['gray', 'green', 'red', 'light']),
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  align: 'center',
  color: 'gray',
  iconLeft: null,
  iconRight: null,
};

export default Button;
