import styled from "styled-components"
import LoginRegisterBG from '../../assets/LoginRegisterBG.png'

const StyledSectionLogin = styled.section`
  min-height: 100vh;
  background-image: url(${LoginRegisterBG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;

  .section__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
  }
`

export default StyledSectionLogin