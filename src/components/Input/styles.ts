import styled from "styled-components"

const StyledFieldset = styled.fieldset`
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

export default StyledFieldset