import styled from "styled-components"
import LoginRegisterBG from '../../assets/LoginRegisterBG.png'

const StyledSectionRegister = styled.section`
  min-height: 100vh;
  background-image: url(${LoginRegisterBG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  .section__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`

export default StyledSectionRegister