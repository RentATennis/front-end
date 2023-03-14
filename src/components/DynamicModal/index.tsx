import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../contexts/ShopContext/ShopContext"
import { UserContext } from "../../contexts/UserContext"
import { StyledDynamicModal } from "./StyledDynamicModal"
import StoresSelect from "./StoresSelect"

const DynamicModal = () => {
  const { currentProduct, setCurrentProduct, dynamicModal, setDynamicModal, totalRentCost, setTotalRentCost, handleContractModal } = useContext(ShopContext)
  const { user } = useContext(UserContext)

  const submit = (value: number) => {
    if(currentProduct && value >= 0){
      const sum = value * currentProduct?.price
      setTotalRentCost(sum)
      setCurrentProduct({...currentProduct, daysRent: value})
    }
  }

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
                <div className="dailyInput">
                  <input
                    id="totalCost__imput"
                    type="number"
                    placeholder="Diárias"
                    onChange={(event) => submit(Number(event.target.value))}
                  />
                </div>
                <h3>{totalRentCost.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h3>
              </div>
              <StoresSelect />
              <div className="rentForm__btns">
                <button className="confirm__btn" type="button" onClick={() => handleContractModal()}>
                  Ver contrato
                </button>
                <div
                  className="cancel__btn"
                  onClick={() => setDynamicModal(!dynamicModal)}
                >
                  <span>Cancelar</span>
                </div>
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
  )
}

export default DynamicModal
