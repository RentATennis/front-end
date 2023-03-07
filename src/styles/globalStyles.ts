import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root{
        /* Primary Palette */
        --color-primary: #64F64E;
        --color-secondary: #606060;

        /* Grey Scale Palette */
        --color-grey-0: #EDEDED;
        --color-grey-50: #BCBCBC;
        --color-grey-100: #9D9D9D;
        --color-grey-200: #747474;
        --color-grey-300: #414141;
        --color-grey-400: #202020;

        /* Green Scale Palette */
        --color-green-200: #00E00C;
        --color-green-300: #00B600;
        --color-green-400: #009100;
        --color-green-background: #D2FDC7;

        /* Extra Colors */
        --color-white: #FAFAFA;

        /* Typography */
        --font-family-1: 'Open Sans', sans-serif;

        --font-weight-bold: 700;
        --font-weight-semiBold: 600;
        --font-weight-regular: 400;
        
        --font-size-1: 2.375rem; /* 38px */
        --font-size-2: 1.75rem;  /* 28px */
        --font-size-3: 1.5rem;   /* 24px */
        --font-size-4: 1.25rem;  /* 20px */
        --font-size-5: 1rem;     /* 16px */
        --font-size-5: 0.75rem;  /* 12px */
    }

    body {
        font-family: var(--font-family-1);
    }
`