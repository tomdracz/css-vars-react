# CSS variables examples

## Running
- `yarn install`
- `yarn start`

## Examples

`App.js` loads five different buttons to showcase different ways of styling using dynamic data. Each button gets passed a style object in the format of:

```
  const styles = {
    backgroundColor: 'blue',
    color: 'yellow',
    borderRadius: '10px',
    hoverBackgroundColor: 'yellow',
    hoverColor: 'red',
  };
```

- [ButtonOne](src/ButtonOne/Button.jsx) - uses CSS modules, the styles are applied using inline styling, requires additional state management to apply hover styles
- [ButtonTwo](src/ButtonTwo/Button.jsx) - uses styled-components, the styles are applied through passing props to styled `ButtonBase` component. No need for additional state management on hover
- [ButtonThree](src/ButtonThree/Button.jsx) - uses styled-components but instead of passing styles as props, it uses CSS variables and creates a wrapper span to apply CSS vars as inline styles
- [ButtonFour](src/ButtonFour/Button.jsx) - same as above, but extracts CSS variables functionality [into a separate component](src/CssVariables/index.jsx) that wraps our button base
- [ButtonFive](src/ButtonFive/Button.jsx) - one step further, uses [withCssVariables](src/hocs/with-css-variables.jsx) HOC instead of loading an additional component
