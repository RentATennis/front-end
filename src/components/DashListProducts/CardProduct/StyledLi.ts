import styled from "styled-components";

export const StyledCard = styled.li`
  width: 300px;
  height: 480px;
  display: flex;
  flex-direction: column;
  gap: 43px;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
  
.div__figure--false{
  /* background-image:url('src/assets/DashCardBase.png');
  background-size:cover; */
  background-color: var(--color-grey-300);
  border-radius: 45px;
  width: 237px;
  height: 235px;
  position: relative;
}

.div__figure--true{
  /* background-image:url('src/assets/DashCardBaseLogged.png');
  background-size: contain;
  background-repeat: no-repeat; */
  background-color: var(--color-grey-300);
  border-radius: 45px;
  width: 237px;
  height: 235px;
  position: relative;
}

button{
  position: absolute;
  z-index: 4;
  bottom: 16px;
  right: 16px;
  width: 50px;
  height: 50px;
  background-color: var(--color-primary);
  border: none;
  border-radius: 100%;
  font-size: var(--font-size-1);
  font-weight: bold;
}

button:hover{
  background-color: var(--color-green-200);
  scale: 110%;
}
  
  
  img {
    width: 237px;
    height: 237px;
    position: absolute;
    bottom: 60px;
  }

  img:hover {
    scale: 120%;
    transition: .5s;
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
