import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ThemeContext } from 'styled-components/native';

import * as S from './styles';

const Button = ({
  onPress,
  justify,
  color,
  iconLeft,
  iconRight,
  title,
  ...props
}) => {
  const theme = useContext(ThemeContext);

  return (
    <S.Button accessibilityRole="button" onPress={onPress}>
      {iconLeft && <Icon name={iconLeft} size={16} color={theme.color.text} />}
      <S.Text justify={justify} color={color} {...props}>
        {title}
      </S.Text>
      {iconRight && (
        <Icon name={iconRight} size={16} color={theme.color.text} />
      )}
    </S.Button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['gray', 'green', 'red', 'light']),
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  justify: PropTypes.oneOf(['center', 'space-between']),
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: 'gray',
  justify: 'center',
  iconLeft: null,
  iconRight: null,
};

export default Button;
