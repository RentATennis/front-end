import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { StyledHeader } from "../../components/Header/StyledHeader"
import Avatar from "@mui/material/Avatar"
import { lightBlue } from "@mui/material/colors"
import { StyledProfilePage } from "./StyledProfilePage"
import { UserContext } from "../../contexts/UserContext"
import { StyledFooter } from "./StyledFooter"
import { StyledProfileContainer } from "./StyledProfileContainer"
import { ShopContext } from "../../contexts/ShopContext/ShopContext"
import RentProductCard from "../../components/RentProductCard/RentProductCard"

const ProfilePage = () => {
  const { productList } = useContext(ShopContext)
  const { user } = useContext(UserContext)
  return (
    <StyledProfilePage>
      <StyledHeader>
        <nav>
          <div className="profile">
            <Avatar sx={{ bgcolor: lightBlue }} alt={user?.user.name}></Avatar>
            <h2>{user?.user.name}</h2>
          </div>
          <div className="navContent">
            <Link to={"/dashboard"}>Voltar</Link>
            <button>Sair</button>
          </div>
        </nav>
      </StyledHeader>
      <StyledProfileContainer>
        { productList ? (
          productList.map((product)=>(
            <RentProductCard 
            img={product.img}
            name={product.name}
            price={product.price}
            daysRent={2}
            dayEnd={0}
            />
          ))
        ):(
          null
        )}
      </StyledProfileContainer>
      <StyledFooter>
        <img src="../../assets/logotipo.png" />
      </StyledFooter>
    </StyledProfilePage>
  );
};

export default ProfilePage