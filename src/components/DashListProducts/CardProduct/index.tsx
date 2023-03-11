import React, { useContext } from "react";
import { iProduct } from "../../../contexts/ShopContext/@types";
import { UserContext } from "../../../contexts/UserContext";
import { StyledCard } from "./StyledLi";

const CardProduct = ({
  brand,
  category,
  color,
  dayEnd,
  dayStart,
  genre,
  id,
  img,
  isRented,
  name,
  price,
  size,
}: iProduct) => { 
  const{ user } = useContext(UserContext)
  return (
    <StyledCard>
      {
        user ? (
          <div className="div__figure--true">
            <button>+</button>
          <figure>
            <img src={img} alt={name} />
          </figure>
        </div>
        ):(
          <div className="div__figure--false">
              <figure>
               <img src={img} alt={name} />
              </figure>
          </div>
        )
      }

      <div>
        <span className="name__product">{name}</span>
        <span className="price__product">R$ {price.toFixed(2)}</span>
      </div>
    </StyledCard>
  );
};

export default CardProduct;
