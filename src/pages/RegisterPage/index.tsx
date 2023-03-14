import RegisterForm from '../../components/Form/RegisterForm'
import Logo from '../../components/Logo'
import { StyledContainer } from '../../styles/container'
import StyledSectionRegister from './styles'

const RegisterPage = () => {

  return (
    <StyledSectionRegister>
      <StyledContainer>
        <div className='section__content'>
          <Logo />
          <RegisterForm />
        </div>
      </StyledContainer>
    </StyledSectionRegister>
  )
}

export default RegisterPage