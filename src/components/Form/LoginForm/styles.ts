import styled from "styled-components"

const StyledLoginForm = styled.form`
  background-color: var(--color-white);
  max-width: 450px;
  padding: 24px 40px;
  border-radius: 15px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  h1 {
    font-weight: 700;
    font-size: 38px;
    line-height: 52px;
    color: var(--color-grey-400);
  }

  button {
    height: 45px;
    width: 100%;
    padding: 9px auto;

    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 23px;

    font-weight: var(--font-weight-semiBold);
    font-size: var(--font-size-4);
    line-height: 27px;
    color: var(--color-grey-400);

    cursor: pointer;
  }

  a {
    height: 45px;
    width: 100%;
    padding: 9px auto;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-grey-400);
    border: 1px solid var(--color-grey-400);
    border-radius: 23px;

    text-decoration: none;
    font-weight: var(--font-weight-semiBold);
    font-size: var(--font-size-4);
    line-height: 27px;
    color: var(--color-grey-0);

    cursor: pointer;
  }
`

export default StyledLoginForm