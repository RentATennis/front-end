import React from "react";
import { iRentCardProps } from "./@types";
import { StyledRentCard } from "./StyledRentCard";

const RentProductCard = ({
  img,
  name,
  price,
  daysRent,
  dayEnd,
}: iRentCardProps) => {
    const verifyDevolution = (date: number) => {
        if(date < 0){
            return 'Em atraso'
        }else if (date === 0){
            return 'Hoje'
        }else if (date === 1){
            return 'Amanhã'
        }else{
            return `${date} dias`
        }
    }
  return (
    <StyledRentCard>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="rentProduct__name">
        <p>Nome</p>
        <span>{name}</span>
      </div>
      <div className="rentProduct__price">
        <p>Diária</p>
        <span>{price}</span>
      </div>
      <div className="rentProduct__daysRent">
        <p>Locado por</p>
        <span>{ daysRent > 1 ? `${daysRent} dias` : `${daysRent} dia`}</span>
      </div>
      <div className="rentProduct__totalCost">
        <p>Custo total</p>
        <span>{price * daysRent}</span>
      </div>
      <div className="rentProduct__dayEnd">
        <p>Devolução</p>
        <span>{verifyDevolution(dayEnd)}</span>
      </div>
    </StyledRentCard>
  );
};

export default RentProductCard;

// img={product.img }
//             name={product.name}
//             price={product.price}
//             daysRent={product.dayEnd}
//             dayEnd={product.dayEnd}
