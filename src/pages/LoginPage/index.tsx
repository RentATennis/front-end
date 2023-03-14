import LoginForm from '../../components/Form/LoginForm'
import Logo from '../../components/Logo'
import { StyledContainer } from '../../styles/container'
import StyledSectionLogin from './styles'

const LoginPage = () => {
  return (
    <StyledSectionLogin>
      <StyledContainer>
        <div className='section__content'>
          <Logo />
          <LoginForm />
        </div>
      </StyledContainer>
    </StyledSectionLogin>
  )
}

export default LoginPage