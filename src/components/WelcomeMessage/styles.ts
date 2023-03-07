import styled from "styled-components"

const StyledImage = styled.img`
    height: 117px;
    max-width: fit-content;
    object-fit: contain;

    @media(min-width: 768px) {
        height: 180px;
    }

    @media(min-width: 1024px) {
        height: 230px;
    }

    @media(min-width: 1440px) {
        height: 280px;
    }

    @media(min-width: 1920px) {
        height: 300px;
    }
`

export default StyledImage