import styled from "styled-components";

export const StyledContractModal = styled.div`
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,.5);
position: fixed;
top: 0;
left: 0;
z-index: 10;
display: flex;
justify-content: center;
align-items: center;

.contractModal__container {
    background-color: var(--color-grey-0);
    height: 700px;
    max-height: fit-content;
    width: 500px;
    max-width: 80%;
    border-radius: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
    gap: 1rem;
}

.closeModal {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    background-color: var(--color-grey-50);
    border-radius: 50%;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 30px;
    z-index: 5;
}

.closeModal:hover {
    filter: contrast(50%);
    transition: .2s;
    cursor: pointer;
}

.contractModal__Content {
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: start;
    overflow-y: scroll;
}
`