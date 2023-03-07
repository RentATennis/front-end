import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 247.5px;
    height: 45px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
