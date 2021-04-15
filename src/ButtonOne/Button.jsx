import React, { useState } from 'react';
import styles from './Button.module.css';

const Button = ({children, stylesObject}) => {
  const [hover, setHover] = useState(false)

  const stylesToApply = {
    backgroundColor: hover
      ? stylesObject.hoverBackgroundColor
      : stylesObject.backgroundColor,
    color: hover
      ? stylesObject.hoverColor
      : stylesObject.color,
    borderRadius: stylesObject.borderRadius,
  };
  return (
    <button
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={stylesToApply}
      className={styles.button}
    >
      {children}
    </button>
  );
}

export default Button;