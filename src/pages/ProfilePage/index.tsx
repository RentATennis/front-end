import { useContext } from "react"
import { Link } from "react-router-dom"
import Avatar from "@mui/material/Avatar"
import { deepOrange } from "@mui/material/colors"
import { StyledProfilePage } from "./StyledProfilePage"
import { UserContext } from "../../contexts/UserContext"
import { StyledFooter } from "./StyledFooter"
import { StyledProfileContainer } from "./StyledProfileContainer"
import RentProductCard from "../../components/RentProductCard/RentProductCard"
import { StyledProfileEmpty } from "./StyledProfileEmpty"
import { StyledProfileHeader } from "./StyledProfileHeader"
import { iProduct } from "../../contexts/ShopContext/@types"

const ProfilePage = () => {
  const { user, userLogout } = useContext(UserContext)
  const productsLocalStorage: iProduct[] = JSON.parse(localStorage.getItem('@RentATennis: Products')!)
  
  return (
    <StyledProfilePage>
      <StyledProfileHeader>
        <nav>
          <div className="profile">
            <Avatar sx={{ bgcolor: deepOrange[500] }}>{user?.user.name[0]}</Avatar>
            <h2>{user?.user.name}</h2>
          </div>
          <div className="navContent">
            <Link to={"/dashboard"} className="link white">Voltar</Link>
            <button className="link black" onClick={() => userLogout()}>Sair</button>
          </div>
        </nav>
      </StyledProfileHeader>
      <StyledProfileContainer>
        
        {productsLocalStorage ? (
          productsLocalStorage.map((product) => (
            <RentProductCard
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              daysRent={1}
              dayEnd={1}
            />
          ))
        ) : (
          <StyledProfileEmpty>
            <p>Você ainda não alugou nenhum produto</p>
          </StyledProfileEmpty>
        )}
      </StyledProfileContainer>
      <StyledFooter>
        <img src="src/assets/logotipo.png" />
      </StyledFooter>
    </StyledProfilePage>
  )
}

export default ProfilePage