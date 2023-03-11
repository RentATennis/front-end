import styled from 'styled-components'

export const StyledRentCard = styled.li`
height: 390px;
width: 950px;
max-width: 80%;
border-radius: 40px;
background-color: var(--color-grey-400);
position: relative;
color: var(--color-grey-0);
font-size: var(--font-size-6);
font-weight: var(--font-weight-semiBold);
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;

img {
    width: 160px;
    position: absolute;
    top: -40px;
    align-self: center;
}

.rentProduct__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    gap: 1rem;
}

.rentProduct {
    height: 40%;
    max-width: 80%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.rentProduct > p {
    font-weight: var(--font-weight-regular);
}

.rentProduct > span {
    font-weight: var(--font-weight-bold);
}

.price > span {
    color: var(--color-primary);
}

.totalCost > span {
    color: var(--color-primary);
}

.dayEnd > span {
    color: var(--color-red);
}

@media(min-width: 768px){
    min-height: 150px;
    height: fit-content;
    width: 950px;
    max-width: 80%;
    border-radius: 40px;
    background-color: var(--color-grey-400);
    position: relative;
    color: var(--color-grey-0);
    font-size: var(--font-size-6);
    font-weight: var(--font-weight-semiBold);
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 2rem;
    gap: 2rem;

    img {
        width: 160px;
        position: absolute;
        top: -40px;
        left: 2%;
    }

    .rentProduct__container {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 70%;
        margin-top: 0;
        gap: 5%;
    }

    .rentProduct {
        height: 40%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: .5rem;
}
}
`