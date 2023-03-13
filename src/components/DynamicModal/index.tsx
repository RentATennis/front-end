import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ShopContext } from "../../contexts/ShopContext/ShopContext";
import Input from "../Input";
import { UserContext } from "../../contexts/UserContext";
import { StyledDynamicModal } from "./StyledDynamicModal";

const DynamicModal = () => {
  const { currentProduct, dynamicModal, setDynamicModal, contractModal, setContractModal } =
    useContext(ShopContext);
  const { user } = useContext(UserContext);

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
  } = useForm<iFormRentValues>();

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
            <form className="rentModal__form" >
              <div className="dailyCost">
                <div className="dailyInput">
                  <Input
                    label="Diárias"
                    type="number"
                    register={register("daysRent")}
                    errors={errors.daysRent}
                  />
                </div>
                <h3>{"R$ 180,00"}</h3>
              </div>
              {/*<Select exibindo as cidades para retirada do produto> */}
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
  );
};

export default DynamicModal;
