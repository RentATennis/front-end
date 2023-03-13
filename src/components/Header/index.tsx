import { useContext } from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/logotipo.png"
import { UserContext } from "../../contexts/UserContext"
import { StyledHeader } from "./StyledHeader"

const Header = () => {
  const { user, userLogout } = useContext(UserContext)
  return (
    <StyledHeader>
      <figure>
        <img src={Logo} alt="Logo RentaTennis" />
      </figure>

      {!user ? (
              <div className="button__header">
              <Link to={"/login"} className="login link">Entrar</Link>
              <Link to={"/register"} className="register link">Cadastrar</Link>
            </div>
      ) : (
        <div className="button__header">
        <Link to={"/profile"} className="profile__button link">Perfil</Link>
        <Link to={""} className="logout__button link" onClick={userLogout}>Sair</Link>
      </div>
      )}

    </StyledHeader>
  )
}

export default Header
