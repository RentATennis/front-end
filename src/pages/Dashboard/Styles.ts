import styled from "styled-components";

export const StyledDivInputs = styled.div`
    margin: 150px auto 29px;
    padding: 28px;
    width: 1200px;
    max-width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 45px;
    background-color: var(--color-grey-300);
    border-radius: 40px;
    justify-content: center;
    color: white;

    @media(max-width:700px){
        flex-direction: column;
    }

`