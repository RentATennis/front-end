import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext/ShopContext";
import { iRentCardProps } from "./@types";
import { StyledRentCard } from "./StyledRentCard";

const RentProductCard = ({
  img,
  name,
  price,
  daysRent,
  dayEnd,
}: iRentCardProps) => {
  const { verifyDevolution } = useContext(ShopContext)

  return (
    <StyledRentCard>
      <img src={img} alt={name} />
      <div className="rentProduct__container">
        <div className="rentProduct name">
          <p>Nome</p>
          <span>{name}</span>
        </div>
        <div className="rentProduct price">
          <p>Diária</p>
          <span>{`${price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}`}</span>
        </div>
        <div className="rentProduct daysRent">
          <p>Locado por</p>
          <span>{daysRent > 1 ? `${daysRent} dias` : `${daysRent} dia`}</span>
        </div>
        <div className="rentProduct totalCost">
          <p>Custo total</p>
          <span>
            {(price * daysRent).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <div className="rentProduct dayEnd">
          <p>Devolução</p>
          <span>{verifyDevolution(dayEnd)}</span>
        </div>
      </div>
    </StyledRentCard>
  );
};

export default RentProductCard;
