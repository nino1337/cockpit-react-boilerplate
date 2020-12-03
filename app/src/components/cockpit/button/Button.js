import propTypes from 'prop-types';
import React from 'react';

import useContext from '../../../hooks/useContext';
import * as S from './Button.styles';

const Button = ({ text, variant = 'primary', disabled = false, url }) => {
  const { currentPage } = useContext();
  const color = currentPage.color && currentPage.color.firstColor;

  return (
    <S.Button
      backgroundColor={color}
      variant={variant}
      disabled={disabled}
      href={url}
      target="_self"
    >
      {text}
    </S.Button>
  );
};

Button.propTypes = {
  text: propTypes.string,
  variant: propTypes.string,
  disabled: propTypes.bool,
  url: propTypes.string,
};

export default Button;
