import { useContext } from "react"
import { ShopContext } from "../../contexts/ShopContext/ShopContext"
import CardProduct from "./CardProduct"
import { StyledUl } from "./SyledUl"

const DashListProducts = () => {
  const { filteredProducts } = useContext(ShopContext)


  return (
    <StyledUl>
      {filteredProducts.map((product) => (
        <CardProduct
          key={product.id}
          brand={product.brand}
          category={product.category}
          color={product.color}
          genre={product.genre}
          id={product.id}
          img={product.img}
          isRented={product.isRented}
          name={product.name}
          price={product.price}
          size={product.size}
        />
      ))}
    </StyledUl>
  )
}

export default DashListProducts
