import { useContext, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { ShopContext } from "../../contexts/ShopContext/ShopContext"
import Input from "../Input"
import { UserContext } from "../../contexts/UserContext"
import { StyledDynamicModal } from "./StyledDynamicModal"
import StoresSelect from "./StoresSelect"

const DynamicModal = () => {
  const { currentProduct, dynamicModal, setDynamicModal, contractModal, setContractModal } = useContext(ShopContext)
  const { user } = useContext(UserContext)
  const [totalRentCost, setTotalRentCost] = useState(0)
  
  interface iFormRentValues {
    daysRent: number;
    store: string;
    rentCost: number;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iFormRentValues>()

  const onSubmit: SubmitHandler<iFormRentValues> = (data) => {
    const rentCost = currentProduct?.price || 0
    const daysRent = data.daysRent || 0
    const totalCost = rentCost * daysRent
    setTotalRentCost(totalCost)
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

            <form className="rentModal__form" onSubmit={handleSubmit(onSubmit)}>
              <div className="dailyCost">
                <div className="dailyInput">
                  <Input
                    label="Diárias"
                    type="number"
                    register={register("daysRent")}
                    errors={errors.daysRent}
                  />
                </div>
                <h3>{totalRentCost.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h3>
              </div>
              <StoresSelect />
              <div className="rentForm__btns">
                <button className="confirm__btn" type="submit">
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
