import styled from "styled-components";

export const StyledCard = styled.li`
  width: 300px;
  height: 459px;
  display: flex;
  flex-direction: column;
  gap: 43px;
  
.div__figure--false{
  background-image:url('src/assets/DashCardBase.png');
  background-size:cover;

}

.div__figure--true{
  background-image:url('src/assets/DashCardBaseLogged.png');
  background-size:cover;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
}

button{
  position: absolute;
  bottom: 29px;
  right: 27px;
  width: 50px;
  height: 50px;
  background-color: var(--color-green-400);
  border: none;
  border-radius: 100%;
  font-size: var(--font-size-1);
}
  
  
  img {
    width: 300px;
    height: 300px;
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .name__product{
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-regular);
  }
  .price__product{
    font-size: var(--font-size-4);
    color: var(--color-green-200);
    font-weight: var(--font-weight-regular);
  }
`;
