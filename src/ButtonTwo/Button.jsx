import React from 'react';
import { ButtonBase } from './styles';

const Button = ({children, stylesObject}) => {
  return (
    <ButtonBase stylesObject={stylesObject}>
      {children}
    </ButtonBase>
  )
}

export default Button;