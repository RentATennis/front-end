import styled from "styled-components";

export const StyledProfileContainer = styled.ul`
width: 1200px;
max-width: 80%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 180px;
margin-bottom: 80px;
gap: 5rem;

li:hover {
    background-color: var(--color-grey-300);
}

li:hover > img {
    scale: 110%;
}
`