import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components/native';
import LibIcon from 'react-native-vector-icons/FontAwesome5';

const Icon = ({ color, name, ...props }) => {
  const theme = useContext(ThemeContext);

  return (
    <LibIcon size={16} name={name} color={theme.color[color]} {...props} />
  );
};

Icon.propTypes = {
  color: PropTypes.oneOf(['text', 'gray', 'green', 'red', 'blue']),
  name: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  color: 'text',
};

export default Icon;
