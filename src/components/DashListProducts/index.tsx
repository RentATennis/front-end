import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext/ShopContext";
import CardProduct from "./CardProduct";
import { StyledUl } from "./CardProduct/SyledUl";

const DashListProducts = () => {
  const { productList } = useContext(ShopContext);

  console.log(productList);

  return (
    <StyledUl>
      {productList.map((product) => (
        <CardProduct
          key={product.id}
          brand={product.brand}
          category={product.category}
          color={product.color}
          dayEnd={product.dayEnd}
          dayStart={product.dayStart}
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
  );
};

/*   brand: string;
  category: string;
  color: string;
  dayEnd: string;
  dayStart: string;
  genre: string;
  id: number;
  img: string;
  isRented: boolean;
  name: string;
  price: number;
  size: number[]; */
export default DashListProducts;
