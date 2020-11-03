import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Text from '../Text';
import * as S from './styles';

const Button = ({
  align,
  onPress,
  color,
  iconLeft,
  iconRight,
  title,
  ...props
}) => (
  <S.Button
    accessibilityRole="button"
    color={color}
    align={align}
    onPress={onPress}
    {...props}
  >
    {iconLeft && (
      <Icon name={iconLeft} style={{ marginRight: 10 }} color="text" />
    )}
    <Text size="medium">{title}</Text>
    {iconRight && (
      <Icon name={iconRight} style={{ marginLeft: 10 }} color="text" />
    )}
  </S.Button>
);

Button.propTypes = {
  align: PropTypes.oneOf(['center', 'justified']),
  color: PropTypes.oneOf(['gray', 'green', 'red', 'blue']),
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
