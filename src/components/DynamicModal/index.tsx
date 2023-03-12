import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../contexts/ShopContext/ShopContext";
import { StyledDynamicModal } from "./StyledDynamicModal";

const DynamicModal = () => {
  const { currentProduct, dynamicModal, setDynamicModal } =
    useContext(ShopContext);
  return (
    <StyledDynamicModal>
      <div className="contractModal">
        {currentProduct ? (
          <>
            <span
              className="closeModal"
              onClick={() => setDynamicModal(!dynamicModal)}
            >
              X
            </span>
            <div className="contractModal__top">
              <h2>Confirmar aluguel</h2>
              <img src={currentProduct.img} />
              <span>Defina os detalhes do contrato</span>
            </div>
            <form className="contractModal__form">
              {/* <Imput number com a quantidade de dias de aluguel>
              <Tag exibindo o price * a quantidade de dias setado no imput acima>
              <Select exibindo as cidades para retirada do produto> */}
              <button type="submit">Ver contrato</button>
              <div className="cancel__btn" onClick={() => setDynamicModal(!dynamicModal)}><span>Cancelar</span></div>
            </form>
          </>
        ) : (
          <>
            <span
              className="closeModal"
              onClick={() => setDynamicModal(!dynamicModal)}
            >
              X
            </span>
            <div>
              <p>Faça login para alugar o produto</p>
              <Link to={"/login"}>Entrar</Link>
            </div>
          </>
        )}
      </div>
    </StyledDynamicModal>
  );
};

export default DynamicModal;
