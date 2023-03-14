import styled from "styled-components";

export const StyledDivInputs = styled.div`
    margin: 150px auto 100px;
    padding: 28px;
    width: 1200px;
    max-width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 45px;
    background: var(--color-white);
    border: 2px solid var(--toastify-color-dark);
    border-radius: 40px;
    justify-content: center;
    color: black;

    @media(max-width:700px){
        flex-direction: column;
    }

`