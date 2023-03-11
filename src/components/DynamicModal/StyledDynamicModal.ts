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

div {
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
    gap: 4rem;
}

.closeModal {
    width: 25px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 30px;
}

.closeModal:hover {
    transition: .2s;
    cursor: pointer;
}

div > p {
    color: var(--color-grey-400);
    font-size: var(--font-size-3);
}

div > a {
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

div > a:hover {
    filter: contrast(50%);
    transition: .2s;
}
`