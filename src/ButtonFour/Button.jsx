import React from 'react';
import CssVariables from '../CssVariables';
import { ButtonBase } from './styles';

const Button = ({children, stylesObject}) => {
  return (
    <CssVariables stylesObject={stylesObject}>
      <ButtonBase>{children}</ButtonBase>
    </CssVariables>
  );
}

export default Button;