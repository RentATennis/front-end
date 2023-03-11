import styled from 'styled-components'

export const StyledProfileHeader = styled.header`
  position: fixed;
  margin-bottom: 1px;
  z-index: 5;
  top: 0;
  background-color: var(--color-primary);
  width: 100vw;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  nav{
    width: 1200px;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .profile{
    min-width: 200px;
    max-width: fit-content;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-family: var(--font-size-1);
    font-weight: var(--font-weight-bold);
  }

  .navContent {
    min-width: 200px;
    max-width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .black {
    background-color: var(--color-grey-400);
    color: var(--color-grey-0);
  }

  .white {
    background-color: var(--color-grey-0);
    color: var(--color-grey-400);
  }

  .link {
    border: none;
    width: 5rem;
    height: 25px;
    border-radius: 22.5px;
    text-decoration: none;
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-semiBold);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link:hover {
    filter: contrast(50%);
  }
`