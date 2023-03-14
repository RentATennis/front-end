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
    height: 500px;
    max-height: fit-content;
    width: 600px;
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

.contractModal__Content h2 {
    font-weight: var(--font-weight-bold);
    text-align: center;
    margin-bottom: 1rem;
}

.contractModal__Content h3 {
    font-weight: var(--font-weight-semiBold);
    text-align: center;
    margin-bottom: 1rem;
}

p {
    margin: 5px 5px 0px 0px;
    font-size: var(--font-size-5);
}

strong {
    font-weight: var(--font-weight-semiBold);
}

.contractModal__Buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
}

.contractConfirm__btn {
    width: 120px;
    height: 35px;
    border-radius: 22px;
    border: none;
    outline: none;
    background-color: var(--color-primary);
    color: var(--color-grey-400);
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-bold);
    cursor: pointer;
}

.contractConfirm__btn:hover {
    filter: contrast(50%);
}

.contractCancel__btn {
    width: 120px;
    height: 35px;
    border-radius: 22px;
    border: none;
    outline: none;
    background-color: var(--color-grey-400);
    color: var(--color-grey-0);
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-bold);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contractCancel__btn:hover {
    filter: contrast(50%);
}
`