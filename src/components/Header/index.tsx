import Logo from "../../assets/logotipo.png"
import { StyledHeader } from "./StyledHeader"

const Header = () => {
  return (
    <StyledHeader>
      <figure>
        <img src={Logo} alt="Logo RentaTennis" />
      </figure>

      <div className="button__header">
        <button className="login">Entrar</button>
        <button className="register">Cadastrar</button>
      </div>
    </StyledHeader>
  )
}

export default Header
