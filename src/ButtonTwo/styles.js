import styled from 'styled-components';

export const ButtonBase = styled.button`
  font-size: 24px;
  background-color: ${(props) => props.stylesObject.backgroundColor};
  color: ${(props) => props.stylesObject.color};
  border-radius: ${(props) => props.stylesObject.borderRadius};

  &:hover {
    background-color: ${(props) => props.stylesObject.hoverBackgroundColor};
    color: ${(props) => props.stylesObject.hoverColor};
  }
`;