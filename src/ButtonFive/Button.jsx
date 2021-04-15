import React from 'react';
import { ButtonBase } from './styles';
import withCssVariables from '../hocs/with-css-variables';

const Button = ({children}) => {
  return (
    <ButtonBase>{children}</ButtonBase>
  );
}

export default withCssVariables(Button);