import styled from 'styled-components'

export const StyledProfileHeader = styled.header`
  position: fixed;
  margin-bottom: 1px;
  z-index: 5;
  top: 0;
  background-color: var(--color-primary);
  width: 100vw;
  height: 170px;
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
    gap: 1.5rem;
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

  .link{
    width: 120px;
    height: 45px;
    border-radius: 23px;
    border: none;
    font-size: 20px;
    font-weight: 600;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .link:hover {
    filter: contrast(50%);
  }
`