import styled from "styled-components"
import LandingPageBG from '../../assets/LandingPageBG.png'

const StyledSectionLanding = styled.section`
    min-height: 100vh;
    background-image: url(${LandingPageBG});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .section__logo--position {
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .section__logo--container {
        max-width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 70px;
    }

    a {
        height: 80px;
        width: 280px;

        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;

        background-color: var(--color-primary);
        border-radius: 40px;

        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-1);
        line-height: 52px;
        color: var(--color-grey-400);
    }

    a:hover {
        background-color: var(--color-green-background);
        transition: ease 0.5s;
    }

    @media(min-width: 768px) {
        .section__logo--position {
            align-items: unset;
        }

        .section__logo--container {
            max-width: 451.5px;
        }
    }

    @media(min-width: 1024px) {
        .section__logo--container {
            max-width: 577px;
        }
    }

    @media(min-width: 1440px) {
        .section__logo--container {
            max-width: 703px;
        }
    }

    @media(min-width: 1920px) {
        .section__logo--container {
            max-width: 752.5px;
        }
    }
`

export default StyledSectionLanding