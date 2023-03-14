import Logo from "../../assets/logotipo.png"
import FadeMenu from "./ButtonsHeader"
import { StyledHeader } from "./StyledHeader"

const Header = () => {
  return (
    <StyledHeader>
      <figure>
        <img src={Logo} alt="Logo RentaTennis" />
      </figure>

    <FadeMenu/>

    </StyledHeader>
  )
}

export default Header
