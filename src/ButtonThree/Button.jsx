import React, { useRef, useEffect } from 'react';
import { ButtonBase } from './styles';

const Button = ({children, stylesObject}) => {
  const ref = useRef();
  
  useEffect(() => {
    const { current: element } = ref;
    const styles = Object.entries(stylesObject);

    styles.forEach(([variable, style]) => {
      element.style.setProperty(`--${variable}`, style);
    });
  }, [ref, stylesObject]);

  return (
    <span ref={ref}>
      <ButtonBase stylesObject={stylesObject}>{children}</ButtonBase>
    </span>
  );
}

export default Button;