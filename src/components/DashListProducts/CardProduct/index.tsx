import React from "react";
import { iProduct } from "../../../contexts/ShopContext/@types";
import { StyledCard } from "./CardStyled";

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
  return (
    <StyledCard>
      <figure>
        <img src={img} alt={name} />
      </figure>

      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </StyledCard>
  );
};

export default CardProduct;
