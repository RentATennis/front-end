import { useContext } from "react"
import { ShopContext } from "../../contexts/ShopContext/ShopContext"
import { UserContext } from "../../contexts/UserContext"
import { StyledContractModal } from "./StyledContractModal"

const ContractModal = () => {
  const { currentProduct, contractModal, setContractModal, handleContractModal, rentAProduct } = useContext(ShopContext)
    const { user } = useContext(UserContext)
  return (
    <StyledContractModal>
      <div className="contractModal__container">
        <span
          className="closeModal"
          onClick={() => setContractModal(!contractModal)}
        >
          X
        </span>
        <div className="contractModal__Content">
            <h2>RentATennis</h2>
            <br></br>
            <h3>Contrato de Aluguel de Tênis</h3>
            <strong>Partes: </strong>
            <p>Locador: RentATennis Serviço de Locação de Calçados LTDA</p>  
            <p>Locatário: {user?.user.name}</p>
            <br></br>
            <p><strong>Objeto do Contrato: </strong></p>
            <p>O locador concorda em alugar um par de tênis {currentProduct?.name}, da {`${currentProduct?.brand}`} para o locatário pelo período de {currentProduct ? currentProduct?.daysRent : null} dias.</p>
            <br></br>
            <p><strong>Responsabilidade do Locatário: </strong></p>
            <p>O locatário concorda em cuidar do tênis alugado com diligência e mantê-lo em bom estado durante o período de aluguel. O locatário é totalmente responsável por qualquer dano, perda ou roubo do tênis alugado. </p>
            <br></br>
            <p><strong>Devolução do Tênis: </strong></p>
            <p>O locatário concorda em devolver o tênis alugado ao locador em {currentProduct?.daysRent}, no mesmo estado em que foi recebido, exceto por desgaste normal resultante do uso. </p>
            <br></br>
            <p><strong>Multa por Atraso na Devolução: </strong></p>
            <p>Se o locatário não devolver o tênis na data acordada, será cobrada uma multa diária de [Valor da multa diária] a partir da data em que o tênis deveria ter sido devolvido. </p>
            <br></br>
            <p><strong>Rescisão do Contrato: </strong></p>
            <p>O locador tem o direito de rescindir este contrato a qualquer momento, mediante aviso prévio por escrito ao locatário. </p>
            <br></br>
            <p><strong>Condições Gerais: </strong></p>
            <p>O locatário reconhece que examinou o tênis alugado antes de aceitá-lo e que ele se encontra em boas condições. </p>
            <p>O locatário concorda em usar o tênis alugado somente para o propósito previsto e não para fins ilegais. </p>
            <p>O locatário concorda em indenizar e isentar o locador de qualquer responsabilidade decorrente do uso do tênis alugado pelo locatário.</p>
            <p>O locatário concorda em pagar qualquer valor devido ao locador no momento da devolução do tênis.</p>
            <p>O locatário concorda em retirar o produto na loja da cidade a qual selecionou.</p>
            <p>Este contrato é regido pelas leis do país em que se realiza o aluguel. </p>
            <br></br>
            <p><strong>Assinaturas: </strong></p>
            <p>O locatário e o locador reconhecem que leram e compreenderam os termos e condições deste contrato e concordam em cumpri-los integralmente. </p>
            <br></br>
            <p>Eu, {user?.user.name}, concordo com todos os termos do presente contrato</p>
        </div>
        <div className="contractModal__Buttons">
          <button className="contractConfirm__btn" onClick={rentAProduct}>
            Alugar
          </button>
          <div
            className="contractCancel__btn"
            onClick={() => handleContractModal()}
          >
            <span>Cancelar</span>
          </div>
        </div>
      </div>
    </StyledContractModal>
  );
};

export default ContractModal
