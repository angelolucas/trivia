import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const margin = {
  none: 0,
  small: 6,
  medium: 10,
  large: 26,
};

const Display = ({
  children,
  alignItems,
  justifyContent,
  flexDirection,
  spacer,
  ...props
}) => (
  <S.Display
    alignItems={alignItems}
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    margin={margin[spacer]}
    {...props}
  >
    {Children.map(children, (child) =>
      cloneElement(child, {
        spacer,
      }),
    )}
  </S.Display>
);

Display.propTypes = {
  alignItems: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'stretch',
    'baseline',
  ]),
  children: PropTypes.node.isRequired,
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-revese',
  ]),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  spacer: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
};

Display.defaultProps = {
  alignItems: 'stretch',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  spacer: 'none',
};

const Item = ({ children, spacer, flex, ...props }) => (
  <S.Item margin={margin[spacer]} flex={flex} {...props}>
    {children}
  </S.Item>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
  flex: PropTypes.string,
  spacer: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
};

Item.defaultProps = {
  spacer: 'none',
  flex: '0 1 auto',
};

Display.Item = Item;

export default Display;
