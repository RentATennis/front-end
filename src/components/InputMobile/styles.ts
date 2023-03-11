import styled from "styled-components"

export const StyledFieldset = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const StyledErrorMessage = styled.span`
  font-family: var(--font-family-1);
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-regular);
  color: var(--color-red);
  align-self: flex-start;
  margin-top: 5px;
`