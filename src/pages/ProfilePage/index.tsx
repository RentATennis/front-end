import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()

  const productsLocalStorage: iProduct[] = JSON.parse(localStorage.getItem('@RentATennis: Products')!)
  console.log(productsLocalStorage)
  
  useEffect(()=>{
    const token = localStorage.getItem('@RentATennis: Token')
    if(!token){
      navigate('/dashboard')
    }
  },[])

  return (
    <StyledProfilePage>
      <StyledProfileHeader>
        <nav>
          <div className="profile">

            <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
            <h2>{user?.name}</h2>

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
              daysRent={Number(product.daysRent)}
              dayEnd={Number(product.daysRent)}
            />
          ))
        ) : (
          <StyledProfileEmpty>
            <p>Você ainda não alugou nenhum produto</p>
          </StyledProfileEmpty>
        )}
      </StyledProfileContainer>
      <StyledFooter>
      </StyledFooter>
    </StyledProfilePage>
  );
};

export default ProfilePage