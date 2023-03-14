import { Link } from 'react-router-dom'
import Logo from '../../components/Logo'
import WelcomeMessage from '../../components/WelcomeMessage'
import { StyledContainer } from '../../styles/container'
import StyledSectionLanding from './styles'

const LandingPage = () => {
  return (
    <StyledSectionLanding>
      <StyledContainer>
        <div className='section__logo--position'>
          <div className='section__logo--container'>
            <Logo />
            <WelcomeMessage />
            <Link to={'/dashboard'}>Iniciar</Link>
          </div>
        </div>
      </StyledContainer>
    </StyledSectionLanding>
  )
}

export default LandingPage