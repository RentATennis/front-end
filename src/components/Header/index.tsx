import { Link } from "react-router-dom"
import Logo from "../../assets/logotipo.png"
import { StyledHeader } from "./StyledHeader"

const Header = () => {
  return (
    <StyledHeader>
      <figure>
        <img src={Logo} alt="Logo RentaTennis" />
      </figure>

      <div className="button__header">
        <Link to={"/login"} className="login link">Entrar</Link>
        <Link to={"/register"} className="register link">Cadastrar</Link>
      </div>
    </StyledHeader>
  )
}

export default Header
