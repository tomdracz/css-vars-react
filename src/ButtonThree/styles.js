import styled from 'styled-components';

export const ButtonBase = styled.button`
  font-size: 24px;
  background-color: var(--backgroundColor);
  color: var(--color);
  border-radius: var(--borderRadius);

  &:hover {
    background-color: var(--hoverBackgroundColor);
    color: var(--hoverColor);
  }
`;