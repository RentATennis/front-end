import { useContext } from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/logotipo.png"
import { UserContext } from "../../contexts/UserContext"
import FadeMenu from "./ButtonsHeader"
import { StyledHeader } from "./StyledHeader"

const Header = () => {
  const { user, userLogout } = useContext(UserContext)
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
