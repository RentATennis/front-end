import styled from "styled-components"

export const StyledHeader = styled.header`
  position: fixed;
  margin-bottom: 1px;
  z-index: 5;
  top: 0;
  background-color: var(--color-primary);
  width: 100vw;
  height: 120px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;


  img {
    width: 247.5px;
    height: 45px;
  }


  .button__header{
    display: flex;
    flex-direction: row;
    gap: 32px;
  }

  .login,
  .profile__button{
    background-color: var(--color-white);
    color:black
  }

  .register,
  .logout__button{
    background-color: var(--color-grey-400);
    color: var(--color-white);
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

  @media (max-width: 500px) {
    flex-direction: column;
  }
`
