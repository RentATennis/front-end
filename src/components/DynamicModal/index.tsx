import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../contexts/ShopContext/ShopContext"
import { UserContext } from "../../contexts/UserContext"
import { StyledDynamicModal } from "./StyledDynamicModal"

const DynamicModal = () => {
  const { currentProduct, dynamicModal, setDynamicModal } =
    useContext(ShopContext)
  const { user } = useContext(UserContext)
  return (
    <StyledDynamicModal>
      <div className="rentModal">
        {user ? (
          <>
            <span
              className="closeModal"
              onClick={() => setDynamicModal(!dynamicModal)}
            >
              X
            </span>
            <div className="rentModal__top">
              <h2>Confirmar aluguel</h2>
              <img src={currentProduct?.img} />
              <p>{currentProduct?.name}</p>
              <span>Defina os detalhes do contrato</span>
            </div>
            <form className="rentModal__form">
              <div className="dailyCost">
              {/* <Imput number com a quantidade de dias de aluguel>
              <Tag exibindo o price * a quantidade de dias setado no imput acima> */}
              </div>
              {/*<Select exibindo as cidades para retirada do produto> */}
              <div className="rentForm__btns">
                <button className="confirm__btn" type="submit">Ver contrato</button>
                <div className="cancel__btn" onClick={() => setDynamicModal(!dynamicModal)}><span>Cancelar</span></div>
              </div>
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
            <div className="empty__dynamicModal">
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
