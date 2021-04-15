import React, { useRef, useEffect } from 'react';

const CssVariables = ({ children, stylesObject }) => {
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
      {children}
    </span>
  );
};

export default CssVariables;
