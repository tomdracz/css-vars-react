import React from 'react';
import CssVariables from '../CssVariables';

const withCssVariables = (WrappedComponent) => {
  return ({stylesObject, ...otherProps}) => {
    return (
      <CssVariables stylesObject={stylesObject}>
        <WrappedComponent {...otherProps} />
      </CssVariables>
    );
  }
}

export default withCssVariables;