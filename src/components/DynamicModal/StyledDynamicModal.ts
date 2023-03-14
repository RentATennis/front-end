import styled from 'styled-components'

export const StyledDynamicModal = styled.div`
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

.rentModal {
    background-color: var(--color-grey-0);
    height: 600px;
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

.empty__dynamicModal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}

.empty__dynamicModal > p {
    color: var(--color-grey-400);
    font-size: var(--font-size-3);
}

.empty__dynamicModal > a {
    width: 120px;
    height: 45px;
    border-radius: 23px;
    border: none;
    font-size: 20px;
    font-weight: 600;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--color-grey-400);
    background-color: var(--color-primary);
}

.empty__dynamicModal > a:hover {
    filter: contrast(50%);
    transition: .2s;
}

.rentModal__top {
    width: 90%;
    height: 320px;
    max-height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
}

.rentModal__top > h2 {
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-bold);
}

.rentModal__top > img {
    width: 180px;
}

.rentModal__top > span {
    font-size: var(--font-size-6);
    font-weight: var(--font-weight-semiBold);
    margin-top: 10px;
}

.rentModal__form {
    width: 80%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

.dailyCost {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
}

Input {
    width: 120px;
    height: 35px;
    padding-left: .5rem;
    background-color: transparent;
    outline: none;
    border: 1px solid var(--color-primary);
    border-radius: 5px;
}

.dailyCost > h3 {
    width: 120px;
    color: var(--color-primary);
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-bold);
}

.rentForm__btns {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 5%;
}

.confirm__btn {
    width: 150px;
    height: 45px;
    border-radius: 22px;
    border: none;
    outline: none;
    background-color: var(--color-primary);
    color: var(--color-grey-400);
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-bold);
    cursor: pointer;
}

.confirm__btn:hover {
    filter: contrast(50%);
    transition: .2s;
}

.cancel__btn {
    width: 150px;
    height: 45px;
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

.cancel__btn:hover {
    filter: contrast(50%);
    transition: .2s;
}
`