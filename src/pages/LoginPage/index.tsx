import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../components/Form/LoginForm'
import Logo from '../../components/Logo'
import { UserContext } from '../../contexts/UserContext'
import { iUser } from '../../contexts/UserContext/@types'
import { api } from '../../services/api'
import { StyledContainer } from '../../styles/container'
import StyledSectionLogin from './styles'

const LoginPage = () => {
  const { setLoading, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  async function autoLogin() {
    const token = localStorage.getItem('@RentATennis: Token')
    const userId = localStorage.getItem('@RentATennis: UserID')
  
    if (token && userId) {
      try {
        setLoading(true)
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        const response = await api.get<iUser>(`/users/${userId}`, config)
        setUser(response.data)
        navigate('/dashboard')
      } catch (error) {
        console.error(error)
        setUser(null)
        localStorage.removeItem('@RentATennis: Token')
        localStorage.removeItem('@RentATennis: UserID')
      } finally {
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    autoLogin()
  }, [])

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