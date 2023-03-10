import styled from "styled-components"
import InputMask from 'react-input-mask';

export const StyledFieldset = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-regular);
    color: var(--color-red);
  }
`

export const StyledInputMask = styled(InputMask)`
  height: 21px;
  padding: 16.5px 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #333;
  &:hover {
    border-color: #000;
  }
  &:focus {
    border-color: #2196f3;
    border: 2px solid #2196f3;
  }
`;